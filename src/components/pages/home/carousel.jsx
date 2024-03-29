import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import { wrap } from 'popmotion'
import { ButtonWithIcon } from '../../core/Button'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import './style.scss'
import { GlobalData } from '../../../context/globalData'
import { useNavigate } from 'react-router-dom'

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

const Carousel = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const [isHovered,setIsHovered]=useState(false)

  const slider = useMemo(
    () => (globalData ? globalData.Slider : []),
    [globalData]
  )

  const [[page, direction], setPage] = useState([0, 0])
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }


  const swipeConfidenceThreshold = 10000

  const paginate = useCallback(
    (newPage) => {
      if (newPage < 0) newPage =slider.length-1
      if (newPage > slider.length-1) newPage = 0
      const newDirection = newPage > page ? 1 : -1
      setPage([newPage, newDirection])
    },
    [page, slider]
  )

  useEffect(() => {
    let timeOut
    timeOut = setTimeout(() => {
      if(!isHovered){
        paginate(page + 1)
      }
    }, 3500)

    return () => clearTimeout(timeOut)
  }, [paginate, page,isHovered])

  const imageIndex = wrap(0, slider.length, page)
  const navigate = useNavigate()

  return (
    <div className="carousel_wrapper">
      <div className="carousel_area">
        <div className="item_img_wrapper">
          <motion.img
            key={page}
            src={slider[imageIndex] ? slider[imageIndex].image : ''}
            variants={variants}
            enter="enter"
            animate="center"
            exit="exit"
            onHoverStart={()=>setIsHovered(true)}
            onHoverEnd={()=>setIsHovered(false)}

/>
        </div>
        <div className="info_carousel_wrapper">
          <div className="info_carousel">
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
              onHoverStart={()=>setIsHovered(true)}
              onHoverEnd={()=>setIsHovered(false)}
            >
              <div className="texts_wrapper">
                <span>
                  {slider[imageIndex]
                    ? slider[imageIndex][`title_${locale}`]
                    : ''}
                </span>
                <span>
                  {slider[imageIndex]
                    ? slider[imageIndex][`description_${locale}`]
                    : ''}
                </span>
              </div>
              <button
                onClick={() => {
                  if (slider[imageIndex].type === 'article') {
                    navigate('/article?article_id=' + slider[imageIndex].id)
                  } else {
                    window.open(slider[imageIndex].link, '_blank')
                  }
                }}
              >
                {pages.button_texts[`learn_more_${locale}`]}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="carousel_area_mobile">
        <div className="img_wrapper_mobile">
          <motion.img
            key={page}
            src={slider[imageIndex] ? slider[imageIndex].image : ''}
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
            onHoverStart={()=>setIsHovered(true)}
            onHoverEnd={()=>setIsHovered(false)}
          />
        </div>
        <div className="info_wrapper_mobile">
          <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            onHoverStart={()=>setIsHovered(true)}
            onHoverEnd={()=>setIsHovered(false)}
          >
            <div className="texts_wrapper">
              <span>
                {slider[imageIndex]
                  ? slider[imageIndex][`title_${locale}`]
                  : ''}
              </span>
              <span>
                {slider[imageIndex]
                  ? slider[imageIndex][`description_${locale}`]
                  : ''}
              </span>
            </div>
            <button
              onClick={() => {
                if (slider[imageIndex].type === 'article') {
                  navigate('/article?article_id=' + slider[imageIndex].id)
                } else {
                  window.open(slider[imageIndex].link, '_blank')
                }
              }}
             
            >
              {pages.button_texts[`learn_more_${locale}`]}
            </button>
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
          {slider.map((elm, index) => (
            <button onClick={() => paginate(index)} key={index}>
              <div
                style={page === index ? { width: '100%', opacity: 1 } : {}}
              />
            </button>
          ))}
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
