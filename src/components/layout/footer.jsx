import React, { useContext } from 'react'
import abcfin from '../../assets/img/abcfin.png'
import hashtarar from '../../assets/img/hashtarar.png'
import reso from '../../assets/img/reso.png'
import fininfo from '../../assets/img/fininfo.png'
import { pages } from '../../constants'
import bnakaran_eritasardnerin from '../../assets/img/banks_img/bnakaran_eritasardnerin.png'
import ararat_bank from '../../assets/img/banks_img/ararat.png'
import convers_bank from '../../assets/img/banks_img/convers.png'
import abb_bank from '../../assets/img/banks_img/abb.png'
import { LocaleContext } from '../../context/localeContext'
import { useNavigate } from 'react-router'
import Icon from '../core/Icon'

const Footer = () => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()

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
            </div>
            <div className="collaborators_container">
              <img src={bnakaran_eritasardnerin} alt="" />
              <img src={ararat_bank} alt="" />
              <img src={convers_bank} alt="" />
              <img src={abb_bank} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_second_part">
        <div className="main_info_wrapper">
          <Icon
            iconName="logo"
            width={58}
            height={72}
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
          <span>© 2022 Fides . All rights reserved </span>
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
