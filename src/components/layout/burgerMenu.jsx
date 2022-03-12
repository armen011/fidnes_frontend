import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../core/Icon'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'

const ItemWrapper = ({ title, url, drop_down, setSelectedMenu }) => {
  const navigate = useNavigate()
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
        drop_down ? setSelectedMenu({ title, url, drop_down }) : navigate(url)
      }}
    >
      {title}
      {drop_down && (
        <Icon iconName="burger_menu_arrow_right" width={24} height={24} />
      )}
    </motion.li>
  )
}

const BurgerMenu = ({ isMenuBarOpened }) => {
  const [selectedMenu, setSelectedMenu] = useState(undefined)
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
                  {...{ setSelectedMenu, ...elm }}
                />
              ))}
            {!selectedMenu && <div className="menu_divider" />}
            {!selectedMenu &&
              pages.main_header.map((elm, index) => (
                <ItemWrapper
                  key={`header_${index}`}
                  {...{ setSelectedMenu, ...elm }}
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
                {selectedMenu.title}
              </li>
            )}
            {selectedMenu && (
              <ItemWrapper
                {...{ title: selectedMenu.title, url: selectedMenu.url }}
              />
            )}
            {selectedMenu &&
              selectedMenu.drop_down.map((elm, index) => (
                <ItemWrapper
                  key={`selected_menu_${index}`}
                  {...{ setSelectedMenu, ...elm }}
                />
              ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BurgerMenu
