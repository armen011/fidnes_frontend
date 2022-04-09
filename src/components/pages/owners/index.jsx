import React, { useContext } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import './style.scss'

const Owners = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="owners_wrapper">
      <BreadCrumb
        title={pages.titles[`owners_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`owners_${locale}`], url: '/owners' },
        ]}
      />
      <div className="owners_container">
        <div className="owners_wrapper">
          <div className="owners_main_container">
            <h3>Սեփականատերեր</h3>
            <span>
              {
                '«Ֆիդես հիփոթեքային ընկերություն» ՈՒՎԿ ՓԲԸ  միակ բաժնետերն է հանդիսանում Արցախի ներդրումային հիմնադրամը: Մասնակցության չափը՝ 100%:Հաշվի առնելով այն հանգամանքը, որ «Ֆիդես հիփոթեքային ընկերություն» ՈՒՎԿ ՓԲՆ-ն չի իրականացնում իր կողմից թողարկված արժեթղթերի հրապարակային տեղաբաշխում և չունի փոքր մասնակցություն ունեցող բաժնետերեր՝ Ընկերությունը չի հրապարակում ՀՀ Կենտրոնական բանկի Խորհրդի 2009 թվականի հունիսի 2-ի թիվ 166-Ն որոշմամբ հաստատված  <<Ֆինանսական կազմակերպությունների և ֆինանսական խմբերի կողմից տեղեկությունների հրապարակումը>> Կանոնակարգ 8/03-ի 15-րդ կետի 3-րդ ենթակետում նշված տեղեկատվությունը համաձայն նույն կանոնակարգի 15-րդ կետի 4-րդ ենթակետի:'
              }
            </span>
          </div>
          <span>{pages.small_texts[`static_test_first_${locale}`]}</span>
          <span>{pages.small_texts[`static_test_second_${locale}`]}</span>
        </div>
        <SideBar />
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(Owners)
