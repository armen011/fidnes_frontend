import React, { useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../core/Icon'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../context/localeContext'

const ItemWrapper = ({
  url,
  drop_down,
  setSelectedMenu,
  setIsMenuBarOpened,
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
        if (drop_down) {
          setSelectedMenu({ url, drop_down, ...titles })
        } else {
          navigate(url)
          setSelectedMenu(undefined)
          setIsMenuBarOpened(false)
        }
      }}
    >
      {titles[`title_${locale}`]}
      {drop_down && (
        <Icon iconName="burger_menu_arrow_right" width={24} height={24} />
      )}
    </motion.li>
  )
}

const BurgerMenu = ({ isMenuBarOpened, setIsMenuBarOpened }) => {
  const [selectedMenu, setSelectedMenu] = useState(undefined)
  const { locale } = useContext(LocaleContext)

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
                  {...{ setSelectedMenu, setIsMenuBarOpened, ...elm }}
                />
              ))}
            {!selectedMenu && <div className="menu_divider" />}
            {!selectedMenu &&
              pages.main_header.map((elm, index) => (
                <ItemWrapper
                  key={`header_${index}`}
                  {...{ setSelectedMenu, ...elm, setIsMenuBarOpened }}
                />
              ))}
            {selectedMenu && (
              <li
                style={{ justifyContent: 'flex-start' }}
                onClick={() => setSelectedMenu(undefined)}
              >
                <Icon
                  iconName="burger_menu_arrow_left"
                  width={24}
                  height={24}
                />
                {selectedMenu[`title_${locale}`]}
              </li>
            )}
            {selectedMenu && (
              <ItemWrapper
                {...{
                  title_am: selectedMenu.title_am,
                  title_ru: selectedMenu.title_ru,
                  title_en: selectedMenu.title_en,
                  url: selectedMenu.url,
                  setSelectedMenu,
                  setIsMenuBarOpened,
                }}
              />
            )}
            {selectedMenu &&
              selectedMenu.drop_down.map((elm, index) => (
                <ItemWrapper
                  key={`selected_menu_${index}`}
                  {...{ setSelectedMenu, ...elm, setIsMenuBarOpened }}
                />
              ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BurgerMenu
