import React, { useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../core/Icon'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../context/localeContext'

const ItemWrapper = ({
  url,
  drop_down,
  setSelectedMenu,
  setIsMenuBarOpened,
  isSabMenu,
  isSelected,
  ...titles
}) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const variantItem = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
      },
      exit: { opacity: 0 },
    }),
    []
  )

  return (
    <motion.li
      variants={variantItem}
      onClick={() => {
        if (!drop_down) {
          navigate(url)
          setSelectedMenu(undefined)
          setIsMenuBarOpened(false)
        }
      }}
      style={{
        paddingLeft: isSabMenu ? '32px' : '',
        color: isSelected ? '#482003' : '',
        fontWeight: isSelected ? '600' : '',
        marginBottom: isSelected ? '16px' : '',
      }}
    >
      <span
        onClick={() => {
          navigate(url)
          setSelectedMenu(undefined)
          setIsMenuBarOpened(false)
        }}
      >
        {titles[`title_${locale}`]}
      </span>
      {drop_down && (
        <Icon
          iconName="burger_menu_arrow_right"
          width={24}
          height={24}
          onClick={() => {
            setSelectedMenu({ url, drop_down, ...titles })
          }}
        />
      )}
    </motion.li>
  )
}

const BurgerMenu = ({ isMenuBarOpened, setIsMenuBarOpened }) => {
  const [selectedMenu, setSelectedMenu] = useState(undefined)
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  const location = useLocation()

  const varinatContainer = useMemo(
    () => ({
      initial: {
        width: 0,
        opacity: 0,
      },
      visible: {
        width: 'auto',
        height: 'auto',
        opacity: 1,
        transition: {
          duration: 0.2,
          type: 'easeInOut',
        },
      },
    }),
    []
  )

  const variantList = useMemo(
    () => ({
      show: {
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.05,
          ease: 'easeInOut',
        },
      },
    }),
    []
  )

  return (
    <AnimatePresence exitBeforeEnter>
      {isMenuBarOpened && (
        <motion.div
          className="burger_menu"
          variants={varinatContainer}
          initial="initial"
          animate="visible"
          exit="initial"
        >
          <motion.ul
            variants={variantList}
            animate="show"
            initial="hidden"
            exit="hidden"
          >
            {!selectedMenu &&
              pages.extra_header.map((elm, index) => (
                <ItemWrapper
                  key={`extra_header_${index}`}
                  isSelected={location.pathname === elm.url}
                  {...{ setSelectedMenu, setIsMenuBarOpened, ...elm }}
                />
              ))}
            {!selectedMenu && <div className="menu_divider" />}
            {!selectedMenu &&
              pages.main_header.map((elm, index) => (
                <ItemWrapper
                  key={`header_${index}`}
                  isSelected={location.pathname === elm.url}
                  {...{ setSelectedMenu, ...elm, setIsMenuBarOpened }}
                />
              ))}
            {selectedMenu && (
              <li style={{ justifyContent: 'flex-start' }}>
                <Icon
                  iconName="burger_menu_arrow_left"
                  width={24}
                  height={24}
                  onClick={() => setSelectedMenu(undefined)}
                />
                <span
                  onClick={() => {
                    navigate(selectedMenu.url)
                    setIsMenuBarOpened(false)
                    setSelectedMenu(undefined)
                  }}
                  style={{ marginLeft: '8px' }}
                >
                  {selectedMenu[`title_${locale}`]}
                </span>
              </li>
            )}

            {selectedMenu &&
              selectedMenu.drop_down.map((elm, index) => (
                <ItemWrapper
                  key={`selected_menu_${index}`}
                  isSabMenu={true}
                  isSelected={
                    location.pathname === selectedMenu.url &&
                    location.search.split('=')[1] === elm.id
                  }
                  {...{ setSelectedMenu, ...elm, setIsMenuBarOpened }}
                />
              ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default React.memo(BurgerMenu)
