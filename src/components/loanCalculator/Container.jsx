import { motion } from 'framer-motion'
import React from 'react'

const typeVariant = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      transition: {
        duration: 0.5,
      },
      x: direction < 0 ? 1000 : -1000,
    }
  },
}

const Container = ({ typeArray, direction, page, ...otherProps }) => {
  return (
    <motion.div
      key={page}
      custom={direction}
      variants={typeVariant}
      className="two_containers"
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        opacity: { duration: 0.3 },
      }}
      {...otherProps}
    >
      {typeArray &&
        typeArray.map(({ title, img }, index) => {
          return (
            <div className="container" key={index}>
              <div className="img_wraperr">
                <img src={img} alt="" />
              </div>
              <div className="title_wrapper">
                <span>{title}</span>
              </div>
            </div>
          )
        })}
    </motion.div>
  )
}

export default React.memo(Container)
