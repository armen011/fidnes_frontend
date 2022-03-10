import React, { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import pages from './pages.json'

const BurgerMenu = ({ isMenuBarOpened }) => {
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
        background: 'red',
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
            {pages.extra_header.map(() => (
              <li>Hello</li>
            ))}
            {pages.main_header.map(() => (
              <li>Hello</li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BurgerMenu
