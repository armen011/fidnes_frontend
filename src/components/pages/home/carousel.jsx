import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import { ButtonWithIcon } from '../../core/Button'
import first from '../../../assets/img/slider1.png'
import second from '../../../assets/img/slider2.png'
import third from '../../../assets/img/slider3.png'
import fourth from '../../../assets/img/slider4.png'
import './style.scss'

const variants = {
  enter: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  center: {
    zIndex: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
}
const infoVariant = {
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

const images = [first, second, third, fourth]
const texts = [
  { title: 'Հիփոթեքային Վարկեր ՀՀ' },
  { title: 'Հիփոթեքային Վարկեր Արցախում' },
  { title: 'Սպառողական Վարկեր ` հատկապես ոսկու գրավով վարկեր' },
  { title: 'Ապահովագրություն' },
]
const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }
  const swipeConfidenceThreshold = 10000

  const paginate = useCallback(
    (newPage) => {
      if (newPage < 0) newPage = 3
      if (newPage > 3) newPage = 0
      const newDirection = newPage > page ? 1 : -1
      setPage([newPage, newDirection])
    },
    [page]
  )

  useEffect(() => {
    let timeOut
    timeOut = setTimeout(() => {
      paginate(page + 1)
    }, 3500)

    return () => clearTimeout(timeOut)
  }, [paginate, page])

  const imageIndex = wrap(0, images.length, page)

  return (
    <div className="carousel_wrapper">
      <div className="carousel_area">
        <div className="item_img_wrapper">
          <AnimatePresence>
            <motion.img
              key={page}
              src={images[imageIndex]}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(page + 1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(page - 1)
                }
              }}
            />
          </AnimatePresence>
        </div>
        <div className="info_carousel_wrapper">
          <div className="info_carousel">
            <AnimatePresence custom={direction} exitBeforeEnter>
              <motion.div
                key={page}
                custom={direction}
                variants={infoVariant}
                className="info_wrapper"
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.3 },
                }}
                style={{
                  height: '100%',
                  width: 708,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(page + 1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(page - 1)
                  }
                }}
              >
                <div className="texts_wrapper">
                  <span>{texts[imageIndex].title}</span>
                  <span>
                    Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և
                    ցածր տոկոսադրույքով վարկատեսա՞կ եք փնտրում։ Եկե՛ք Fides։
                  </span>
                </div>
                <button>Իմանալ ավելին</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="carousel_area_mobile">
        <div className="img_wrapper_mobile">
          <AnimatePresence custom={direction} exitBeforeEnter>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={infoVariant}
              className="info_wrapper"
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(page + 1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(page - 1)
                }
              }}
            />
          </AnimatePresence>
        </div>
        <div className="info_wrapper_mobile">
          <motion.div
            key={page}
            src={images[imageIndex]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="texts_wrapper">
              <span>{texts[imageIndex].title}</span>
              <span>
                Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր
                տոկոսադրույքով վարկատեսա՞կ եք փնտրում։ Եկե՛ք Fides։
              </span>
            </div>
            <button>Իմանալ ավելին</button>
          </motion.div>
        </div>
      </div>

      <div className="carousel_controller">
        <ButtonWithIcon
          iconName="arrow_left_24"
          width={24}
          height={24}
          className="carousel_button"
          onClick={() => paginate(page - 1)}
        />
        <div className="content_selector_controller">
          <button onClick={() => paginate(0)}>
            <div style={page === 0 ? { width: '100%', opacity: 1 } : {}} />
          </button>
          <button onClick={() => paginate(1)}>
            <div style={page === 1 ? { width: '100%', opacity: 1 } : {}} />
          </button>
          <button onClick={() => paginate(2)}>
            <div style={page === 2 ? { width: '100%', opacity: 1 } : {}} />
          </button>
          <button onClick={() => paginate(3)}>
            <div style={page === 3 ? { width: '100%', opacity: 1 } : {}} />
          </button>
        </div>
        <ButtonWithIcon
          iconName="arrow_right_24"
          width={24}
          height={24}
          className="carousel_button"
          onClick={() => paginate(page + 1)}
        />
      </div>
    </div>
  )
}

export default React.memo(Carousel)
