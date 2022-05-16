import React, { useContext,useEffect, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import { ButtonWithIcon } from '../../core/Button'
import Icon from '../../core/Icon'
import './style.scss'
import axios from 'axios'
import requests from '../../../const/requests'



const Address = () => {
  const { locale } = useContext(LocaleContext);
  const [branch,setBranch] = useState([]);

  useEffect(() => {
    axios.get(requests.branch()).then(({data}) => {

      setBranch(data)
    })
  },[])

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
          {branch.map(
            (item) => {
              return (
                <ul className="item_conatiner" key={item.id}>
                  <li>{item[`name_${locale}`]}</li>
                  <li>{item.worhing_hours}</li>
                  <li>
                    <Icon iconName="contact_location" width={24} height={24} />
                    <span>{item[`address_${locale}`]}</span>
                  </li>
                  <li>
                    <Icon iconName="contact_phone" width={24} height={24} />
                    <a href={`tel:${item[`tel_1`]}`}>{item[`tel_1`]}</a>
                    {item[`tel_2`] && <a href={`tel:${item[`tel_2`]}`}>{item[`tel_2`]}</a>}
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
