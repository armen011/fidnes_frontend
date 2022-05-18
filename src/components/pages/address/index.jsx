import React, { useContext, useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import './style.scss'
import axios from 'axios'
import requests from '../../../const/requests'

const Address = () => {
  const { locale } = useContext(LocaleContext)
  const [branch, setBranch] = useState([])

  useEffect(() => {
    axios.get(requests.branch()).then(({ data }) => {
      setBranch(data)
    })
  }, [])
  const Pointer = ({ text }) => (
    <svg
      width="30"
      height="36"
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833984 15.1959C0.833984 7.52949 7.24045 1.33301 14.9897 1.33301C22.7609 1.33301 29.1673 7.52949 29.1673 15.1959C29.1673 19.0592 27.7623 22.6457 25.4498 25.6856C22.8987 29.0389 19.7542 31.9605 16.2149 34.2537C15.4048 34.7837 14.6738 34.8237 13.7847 34.2537C10.2252 31.9605 7.0808 29.0389 4.55148 25.6856C2.23729 22.6457 0.833984 19.0592 0.833984 15.1959ZM10.3244 15.6276C10.3244 18.1959 12.4201 20.2158 14.9897 20.2158C17.5611 20.2158 19.6769 18.1959 19.6769 15.6276C19.6769 13.0793 17.5611 10.9611 14.9897 10.9611C12.4201 10.9611 10.3244 13.0793 10.3244 15.6276Z"
        fill="#DFB43C"
      />
      <path
        d="M25.4498 25.6856L25.8477 25.9884L25.8478 25.9884L25.4498 25.6856ZM16.2149 34.2537L15.943 33.8341L15.9411 33.8353L16.2149 34.2537ZM13.7847 34.2537L13.5139 34.674L13.5149 34.6746L13.7847 34.2537ZM4.55148 25.6856L4.95067 25.3845L4.94932 25.3828L4.55148 25.6856ZM14.9897 0.833008C6.97605 0.833008 0.333984 7.24175 0.333984 15.1959H1.33398C1.33398 7.81723 7.50486 1.83301 14.9897 1.83301V0.833008ZM29.6673 15.1959C29.6673 7.24126 23.0247 0.833008 14.9897 0.833008V1.83301C22.497 1.83301 28.6673 7.81773 28.6673 15.1959H29.6673ZM25.8478 25.9884C28.216 22.8752 29.6673 19.1847 29.6673 15.1959H28.6673C28.6673 18.9336 27.3087 22.4162 25.0519 25.3829L25.8478 25.9884ZM16.4868 34.6733C20.0748 32.3485 23.2618 29.3873 25.8477 25.9884L25.0519 25.3829C22.5355 28.6904 19.4336 31.5724 15.943 33.8341L16.4868 34.6733ZM13.5149 34.6746C14.0165 34.9963 14.5166 35.1727 15.0358 35.1662C15.554 35.1596 16.0313 34.9714 16.4886 34.6721L15.9411 33.8353C15.5884 34.0661 15.2952 34.1628 15.0231 34.1662C14.7519 34.1697 14.442 34.0812 14.0546 33.8328L13.5149 34.6746ZM4.15231 25.9867C6.71716 29.3871 9.90507 32.349 13.5139 34.674L14.0555 33.8334C10.5454 31.5719 7.44444 28.6907 4.95066 25.3845L4.15231 25.9867ZM0.333984 15.1959C0.333984 19.1846 1.78357 22.8752 4.15365 25.9885L4.94932 25.3828C2.69101 22.4163 1.33398 18.9337 1.33398 15.1959H0.333984ZM14.9897 19.7158C12.6854 19.7158 10.8244 17.909 10.8244 15.6276H9.82437C9.82437 18.4827 12.1548 20.7158 14.9897 20.7158V19.7158ZM19.1769 15.6276C19.1769 17.9061 17.2987 19.7158 14.9897 19.7158V20.7158C17.8234 20.7158 20.1769 18.4856 20.1769 15.6276H19.1769ZM14.9897 11.4611C17.2862 11.4611 19.1769 13.3567 19.1769 15.6276H20.1769C20.1769 12.8019 17.8359 10.4611 14.9897 10.4611V11.4611ZM10.8244 15.6276C10.8244 13.3538 12.6979 11.4611 14.9897 11.4611V10.4611C12.1423 10.4611 9.82437 12.8048 9.82437 15.6276H10.8244Z"
        fill="#482003"
      />
    </svg>
  )

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
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCASLcnOzU2jBXJencQ27G8ZXITF0RnWhI',
            }}
            defaultCenter={{
              lat: 39.83173048881325,
              lng: 45.66950013495533,
            }}
            defaultZoom={8}
          >
            <Pointer lat={40.21036890342693} lng={46.82306623277689} />
            <Pointer lat={40.204844984422756} lng={44.5128209395232} />
            <Pointer lat={39.795542132767906} lng={47.10754171067103} />
          </GoogleMapReact>
        </div>
        <div className="sidebar_conatiner">
          {branch.map((item) => {
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
                  {item[`tel_2`] && (
                    <a href={`tel:${item[`tel_2`]}`}>{item[`tel_2`]}</a>
                  )}
                </li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Address
