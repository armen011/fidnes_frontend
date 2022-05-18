import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import { LocaleContext } from '../../context/localeContext'
import { ButtonWithIcon } from '../core/Button'
import Icon from '../core/Icon'
import { pages } from '../../locales'
import { GlobalData } from '../../context/globalData'
import { seprateByCount } from '../../utils'

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

const Container = React.memo(
  ({ typeArray, direction, page, ...otherProps }) => {
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
          typeArray.map(({ image, url }, index) => {
            return (
              <a
                className="container"
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="img_wraperr">
                  <img src={image} alt="" />
                </div>
              </a>
            )
          })}
      </motion.div>
    )
  }
)

const Footer = () => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()

  const [[page, direction], setPage] = useState([0, 0])

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

  const { globalData } = useContext(GlobalData)
  const dinamicPages = globalData ? globalData.Page : {}
  const partner = globalData ? globalData.Partner : []
  const footerTexts = globalData ? globalData.footer_text : {}
  const collaborators = seprateByCount(partner, 3)

  const containerIndex = wrap(0, collaborators.length, page)
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="layout_footer">
      <div className="footer_first_part">
        <div className="hrefs_collaborators">
          <div className="hrefs_wrapper">
            <span>{pages.small_texts[`useful_links_${locale}`]}</span>
            <div className="hrefs_container">
              {globalData &&
                globalData.UsefullLinks.map((item) => (
                  <a
                    className="href"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    <img src={item.image} alt="abc finance" />
                  </a>
                ))}
            </div>
          </div>
          <div className="collaborators_wrapper">
            <div className="collaborators_header">
              <span>{pages.small_texts[`we_collaborate_${locale}`]}</span>
              <div className="controllers">
                <ButtonWithIcon
                  iconName="arrow_left_24"
                  width={24}
                  height={24}
                  className="slider_button"
                  onClick={() => paginate(page - 1)}
                />
                <ButtonWithIcon
                  iconName="arrow_right_24"
                  width={24}
                  height={24}
                  className="slider_button"
                  onClick={() => paginate(page + 1)}
                />
              </div>
            </div>
            <div className="collaborators_container">
              <AnimatePresence custom={direction} exitBeforeEnter>
                <Container
                  typeArray={collaborators[containerIndex]}
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
                  {...{ direction, page }}
                />
              </AnimatePresence>
            </div>
            <div className="collaborators_container_mobile">
              {partner.map(({ image, title_hy, url }, index) => (
                <a
                  className="mobile_img_wrapper"
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={image} alt={title_hy} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-new-text-for-all-pages">
          <p>{pages.small_texts[`footer_new_text_${locale}`]}</p>
        </div>
      </div>
      <div className="footer_second_part">
        <div className="main_info_wrapper">
          <Icon
            iconName="logo"
            width={64}
            height={80}
            onClick={() => navigate('/')}
          />
          <span>{footerTexts ? footerTexts.name[`text_${locale}`] : ''}</span>
          <span>
            {footerTexts ? footerTexts.cb_control[`text_${locale}`] : ''}
          </span>
          <button onClick={() => navigate('/contact_us')}>
            {pages.button_texts[`contact_${locale}`]}
          </button>
          <span>
            © {new Date().getFullYear()}{' '}
            {footerTexts ? footerTexts.copyright[`text_${locale}`] : ''}
          </span>
          <span>
            {footerTexts ? footerTexts.responsibility[`text_${locale}`] : ''}
          </span>
        </div>
        <div className="page_href_wrapper">
          <div className="colum_wrapper">
            <span onClick={() => navigate('/about')}>
              {pages.titles[`about_${locale}`]}
            </span>
            <ul>
              {dinamicPages.about &&
                dinamicPages.about.map((elm, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      navigate(pages.main_header[0].query_name + elm.id)
                    }
                  >
                    {elm[`title_${locale}`]}
                  </li>
                ))}
            </ul>
          </div>
          <div className="colum_wrapper">
            <span>{pages.titles[`loan_${locale}`]}</span>
            <ul>
              {dinamicPages.loans &&
                dinamicPages.loans.map((elm, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      navigate(pages.main_header[1].query_name + elm.id)
                    }
                  >
                    {elm[`title_${locale}`]}
                  </li>
                ))}
            </ul>
          </div>
          <div className="colum_wrapper">
            <span>{pages.small_texts[`other_links_${locale}`]}</span>
            <ul>
              <li onClick={() => navigate('/news')}>
                {pages.titles[`news_${locale}`]}
              </li>
              <li onClick={() => navigate('/sitemap')}>
                {pages.titles[`sitemap_${locale}`]}
              </li>
            </ul>
          </div>

          <a
            href="https://hsrocket.com/hy/"
            className="designed_by"
            target="_blank"
            rel="noreferrer"
          >
            By HS Rocket
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer)
