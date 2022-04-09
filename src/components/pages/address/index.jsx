import React, { useContext } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import { ButtonWithIcon } from '../../core/Button'
import Icon from '../../core/Icon'
import './style.scss'

const mockData = [
  {
    title: 'Գլխամասային գրասենյակ',
    working_houres: '09:30 - 17:00',
    address: 'Գործ․հասցե՝ ԱՀ, ք․ Ստեփանակերտ, Մ․ Գոշ 2/33',
    phone_number: 'Հեռ․՝ (+374) 47 970197, (+374) 47 960197',
  },
  {
    title: 'Պարոնյան Մասնաճյուղ',
    working_houres: '09:30 - 17:00',
    address: 'Գործ․հասցե՝ ԱՀ, ք․ Ստեփանակերտ, Մ․ Գոշ 2/33',
    phone_number: 'Հեռ․՝ (+374) 47 970197, (+374) 47 960197',
  },
  {
    title: 'Գլխամասային գրասենյակ',
    working_houres: '09:30 - 17:00',
    address: 'Գործ․հասցե՝ ԱՀ, ք․ Ստեփանակերտ, Մ․ Գոշ 2/33',
    phone_number: 'Հեռ․՝ (+374) 47 970197, (+374) 47 960197',
  },
]

const Address = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="address_wrapper">
      <BreadCrumb
        title={pages.titles[`addresses_&_working_hours_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          {
            title: pages.titles[`addresses_&_working_hours_${locale}`],
            url: '/address',
          },
        ]}
      />
      <div className="address_info_wrapper">
        <div className="map_conatiner">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d840.8482186577411!2d46.76267792526249!3d39.826224483206985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1648903541597!5m2!1sen!2s"
            width="1074"
            height="652"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <ButtonWithIcon
            iconName="clock"
            width={24}
            height={24}
            className="mobile_address_button"
          />
        </div>
        <div className="sidebar_conatiner">
          {mockData.map(
            ({ title, working_houres, address, phone_number }, index) => {
              return (
                <ul className="item_conatiner" key={index}>
                  <li>{title}</li>
                  <li>{working_houres}</li>
                  <li>
                    <Icon iconName="contact_location" width={24} height={24} />
                    <span>{address}</span>
                  </li>
                  <li>
                    <Icon iconName="contact_phone" width={24} height={24} />
                    <span>{phone_number}</span>
                  </li>
                </ul>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default Address
