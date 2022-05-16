import React, { useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../core/Icon'
import { pages } from '../../locales'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../context/localeContext'
import { GlobalData } from '../../context/globalData'

const ItemWrapper = ({
  id,
  url,
  drop_down_key,
  setSelectedMenu,
  setIsMenuBarOpened,
  isSabMenu,
  isSelected,
  query_name,
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
        if (!drop_down_key) {
          if (query_name) {
            if (titles.types && titles.types === 'url') {
              if (
                titles.link.includes('://fides.am') ||
                titles.link.includes('://www.fides.am')
              ) {
                window.location.replace(titles.link)
              } else {
                window.open(titles.link)
              }
            } else {
              navigate(query_name ? query_name + id : url)
            }
          } else {
            if (titles.types && titles.types === 'url') {
               if (
                titles.link.includes('://fides.am') ||
                titles.link.includes('://www.fides.am')
              ) {
                window.location.replace(titles.link)
              } else {
                window.open(titles.link)
              }
            } else {
              navigate(`${url}`)
            }
          }
          setIsMenuBarOpened(false)
          setSelectedMenu(undefined)
        } else {
          setSelectedMenu({ url, drop_down_key, query_name, ...titles })
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
        onClick={(event) => {
          event.stopPropagation()
          const redirectUrl = query_name && id ? query_name + id : url
          if (titles.types && titles.types === 'url') {
             if (
                titles.link.includes('://fides.am') ||
                titles.link.includes('://www.fides.am')
              ) {
                window.location.replace(titles.link)
              } else {
                window.open(titles.link)
              }
          } else {
            navigate(redirectUrl)
          }
          setSelectedMenu(undefined)
          setIsMenuBarOpened(false)
        }}
      >
        {titles[`title_${locale}`]}
      </span>
      {drop_down_key && (
        <Icon
          iconName="burger_menu_arrow_right"
          width={24}
          height={24}
          onClick={() => {
            setSelectedMenu({ url, drop_down_key, ...titles })
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

  const { globalData } = useContext(GlobalData)
  const dinamicPages = globalData ? globalData.Page : {}

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

            {selectedMenu
              ? selectedMenu.drop_down
                ? selectedMenu.drop_down.map((elm, index) => (
                    <ItemWrapper
                      key={`selected_menu_${index}`}
                      isSabMenu={true}
                      isSelected={
                        location.pathname === selectedMenu.url &&
                        parseInt(location.search.split('=')[1]) === elm.id
                      }
                      {...{
                        setSelectedMenu,
                        ...elm,
                        setIsMenuBarOpened,
                        query_name: selectedMenu.query_name,
                      }}
                    />
                  ))
                : dinamicPages[selectedMenu.drop_down_key].map((elm, index) => (
                    <ItemWrapper
                      key={`selected_menu_${index}`}
                      isSabMenu={true}
                      isSelected={
                        location.pathname === selectedMenu.url &&
                        parseInt(location.search.split('=')[1]) === elm.id
                      }
                      {...{
                        setSelectedMenu,
                        ...elm,
                        setIsMenuBarOpened,
                        query_name: selectedMenu.query_name,
                      }}
                    />
                  ))
              : null}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default React.memo(BurgerMenu)
