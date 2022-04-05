import React, { useCallback, useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'

import { LocaleContext } from '../../context/localeContext'
import { ButtonWithIcon } from '../core/Button'
import Icon from '../core/Icon'
import { pages } from '../../constants'

import bnakaran_eritasardnerin from '../../assets/img/banks_img/bnakaran_eritasardnerin.png'
import ararat_bank from '../../assets/img/banks_img/ararat.png'
import convers_bank from '../../assets/img/banks_img/convers.png'
import abb_bank from '../../assets/img/banks_img/abb.png'
import azgayin_hipotekayin from '../../assets/img/banks_img/azgayin_hipotekayin.png'
import eritasard_hipotek from '../../assets/img/banks_img/eritasard_hipotek.png'
import abcfin from '../../assets/img/abcfin.png'
import hashtarar from '../../assets/img/hashtarar.png'
import reso from '../../assets/img/reso.png'
import fininfo from '../../assets/img/fininfo.png'

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
          typeArray.map(({ title, img }, index) => {
            return (
              <div className="container" key={index}>
                <div className="img_wraperr">
                  <img src={img} alt="" />
                </div>
              </div>
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

  const collaborators = [
    [
      {
        img: bnakaran_eritasardnerin,
        alt: '',
      },
      {
        img: ararat_bank,
        alt: '',
      },
      {
        img: convers_bank,
        alt: '',
      },
    ],
    [
      {
        img: abb_bank,
        alt: '',
      },
      {
        img: azgayin_hipotekayin,
        alt: '',
      },
      {
        img: eritasard_hipotek,
        alt: '',
      },
    ],
  ]

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
              <div className="href" onClick={() => navigate('')}>
                <img src={abcfin} alt="abc finance" />
              </div>
              <div className="href">
                <img src={hashtarar} alt="finansakan hashtarar" />
              </div>
              <div className="href">
                <img src={reso} alt="reso app" />
              </div>
              <div className="href">
                <img src={fininfo} alt="fininfo" />
              </div>
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
              {[...collaborators.flat()].map(({ img, alt }, index) => (
                <div className="mobile_img_wrapper" key={index}>
                  <img src={img} alt={alt} />
                </div>
              ))}
            </div>
          </div>
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
          <span>Ունիվերսալ վարկային կազմակերպություն ՓԲԸ</span>
          <span>
            ՖԻՆԱՆՍԱԿԱՆ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆԸ ՎԵՐԱՀՍԿՎՈՒՄ Է ՀՀ ԿԵՆՏՐՈՆԱԿԱՆ ԲԱՆԿԻ
            ԿՈՂՄԻՑ:
          </span>
          <button onClick={() => navigate('/contact_us')}>
            {pages.button_texts[`contact_${locale}`]}
          </button>
          <span>© 2022 Հեղինակային իրավունքները պաշտպանված են։</span>
          <span>
            Կազմակերպությունը պատասխանատվություն չի կրում իր <br />
            կայքում հղում պարունակող այլ ընկերությունների կայքերի բովանդակության
            ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար,
            և Կազմակերպությունը պատասխանատվություն չի կրում այդ կայքերում
            տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար
          </span>
        </div>
        <div className="page_href_wrapper">
          <div className="colum_wrapper">
            <span>{pages.titles[`about_${locale}`]}</span>
            <ul>
              {pages.main_header[0].drop_down.map((elm, index) => (
                <li key={index} onClick={() => navigate(elm.url)}>
                  {elm[`title_${locale}`]}
                </li>
              ))}
            </ul>
          </div>
          <div className="colum_wrapper">
            <span>{pages.titles[`loan_${locale}`]}</span>
            <ul>
              {pages.main_header[1].drop_down.map((elm, index) => (
                <li key={index} onClick={() => navigate(elm.url)}>
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

          <a href="https://hsrocket.com/hy/" className="designed_by">
            By HS Rocket
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer)
