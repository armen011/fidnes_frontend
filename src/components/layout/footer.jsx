import React from 'react'
import abcfin from '../../assets/img/abcfin.png'
import hashtarar from '../../assets/img/hashtarar.png'
import reso from '../../assets/img/reso.png'
import fininfo from '../../assets/img/fininfo.png'
import logo from '../../assets/img/logo_medium.png'
import pages from './pages.json'
import bnakaran_eritasardnerin from '../../assets/img/banks_img/bnakaran_eritasardnerin.png'
import ararat_bank from '../../assets/img/banks_img/ararat.png'
import convers_bank from '../../assets/img/banks_img/convers.png'
import abb_bank from '../../assets/img/banks_img/abb.png'

const Footer = () => {
  return (
    <div className="layout_footer">
      <div className="footer_first_part">
        <div className="hrefs_collaborators">
          <div className="hrefs_wrapper">
            <span>Օգտակար Հղումներ</span>
            <div className="hrefs_container">
              <div className="href">
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
              <span>Մենք Համագործակցում ենք՝ </span>
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
          <img src={logo} alt="" />
          <span>Ունիվերսալ վարկային կազմակերպություն ՓԲԸ</span>
          <span>
            ՖԻՆԱՆՍԱԿԱՆ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆԸ ՎԵՐԱՀՍԿՎՈՒՄ Է ՀՀ ԿԵՆՏՐՈՆԱԿԱՆ ԲԱՆԿԻ
            ԿՈՂՄԻՑ:
          </span>
          <button>Կապ</button>
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
            <span>Մեր Մասին</span>
            <ul>
              {pages.main_header[0].drop_down.map(({ title, url }, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
          <div className="colum_wrapper">
            <span>Վարկեր</span>
            <ul>
              {pages.main_header[1].drop_down.map(({ title, url }, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
          <div className="colum_wrapper">
            <span>Այլ Հղումներ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer)
