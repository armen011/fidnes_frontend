import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { LocaleContext } from '../../context/localeContext'
import { useNavigate } from 'react-router-dom'

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
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()

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
        typeArray.map(({ id, icon, ...titles }, index) => {
          return (
            <div
              className="container"
              key={index}
              onClick={() => {
                navigate('/loans?loan_id=' + id)
              }}
            >
              <div className="img_wraperr">
                <img src={icon} alt={titles[`title_${locale}`]} />
              </div>
              <div className="title_wrapper">
                <span>{titles[`title_${locale}`]}</span>
              </div>
            </div>
          )
        })}
    </motion.div>
  )
}

export default React.memo(Container)
