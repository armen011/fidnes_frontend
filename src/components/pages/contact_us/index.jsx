import React, { useContext, useState } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import { TextArea, TextInput } from '../../core/Input'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'
import { GlobalData } from '../../../context/globalData'
import axios from 'axios'
import requests from '../../../const/requests'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  note: '',
}

const ContactUs = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const contacts = globalData ? globalData.Social : {}
  const [formData, setFormData] = useState(initialValues)

  const onChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const submit = () => {
    axios.post(requests.sendContactForm(), formData).then((data) => {
      setFormData(initialValues)
    })
  }

  return (
    <div className="contact_us_wrapper">
      <BreadCrumb
        title={pages.titles[`contact_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`contact_${locale}`], url: '/contact_us' },
        ]}
      />
      <div className="contact_info_wrapper">
        <div className="info_conatiner">
          <div className="whole_info_wrapper">
            <span>{pages.small_texts[`connect_methodes_${locale}`]}</span>
            <div className="icon_text_wrapper">
              <Icon
                iconName="contact_location"
                width={24}
                height={24}
                className="icon_wrapper"
              />
              <span>{pages.small_texts[`contact_page_address_${locale}`]}</span>
            </div>
            <div className="icon_text_wrapper">
              <Icon
                iconName="contact_message"
                width={24}
                height={24}
                className="icon_wrapper"
              />
              <span>
                {contacts.Mail &&
                  contacts.Mail.map(({ value }, index, arr) => (
                    <a href={`mailto:${value}`} key={index}>
                      {value}
                      {arr.length - 1 === index ? '' : ' , '}
                    </a>
                  ))}
              </span>
            </div>
            <div className="icon_text_wrapper">
              <Icon
                iconName="contact_phone"
                width={24}
                height={24}
                className="icon_wrapper"
              />
              <span>
                {pages.small_texts[`constact_page_phone_${locale}`]}{' '}
                {contacts.Mobile &&
                  contacts.Mobile.map(({ value }, index, arr) => (
                    <a href={`tel:${value}`} key={index}>
                      {value}
                      {arr.length - 1 === index ? '' : ','}
                    </a>
                  ))}
              </span>
            </div>
            <span>{pages.small_texts[`other_methodes_${locale}`]}</span>
            <div className="icon_text_wrapper">
              <a
                href={`https://api.whatsapp.com/send?phone=${
                  contacts &&
                  contacts.WhatsApp &&
                  contacts.WhatsApp.lenght > 0 &&
                  contacts.WhatsApp[0].value
                }`}
              >
                <Icon
                  iconName="contact_watsapp"
                  width={24}
                  height={24}
                  className="icon_wrapper"
                />
              </a>
              <a
                href={`viber://add?number=${
                  contacts &&
                  contacts.Viber &&
                  contacts.Viber.lenght > 0 &&
                  contacts.Viber[0].value
                }`}
              >
                <Icon
                  iconName="contact_viber"
                  width={24}
                  height={24}
                  className="icon_wrapper"
                />
              </a>
              <span>
                {contacts.WhatsApp &&
                  contacts.WhatsApp.map(({ value }) => ` ${value}`)}
              </span>
            </div>
          </div>
        </div>
        <div className="sugestion_form_container">
          <span>{pages.small_texts[`dear_client_${locale}`]}</span>
          <span>{pages.small_texts[`contact_form_text_${locale}`]}</span>
          <div className="form_wrapper">
            <TextInput
              value={formData.first_name}
              setValue={onChange('first_name')}
              className="small_input"
              placeholder={pages.placeholders[`name_${locale}`]}
            />
            <TextInput
              value={formData.last_name}
              setValue={onChange('last_name')}
              className="small_input"
              placeholder={pages.placeholders[`surname_${locale}`]}
            />
            <TextInput
              value={formData.email}
              setValue={onChange('email')}
              className="small_input"
              placeholder={pages.placeholders[`email_${locale}`]}
            />
            <TextInput
              value={formData.phone}
              setValue={onChange('phone')}
              className="small_input"
              placeholder={pages.placeholders[`phone_number_${locale}`]}
            />
            <TextInput
              value={formData.address}
              setValue={onChange('address')}
              className="big_input"
              placeholder={pages.placeholders[`address_${locale}`]}
            />
            <TextArea
              value={formData.note}
              setValue={onChange('note')}
              className="big_input"
              placeholder={pages.placeholders[`notes_${locale}`]}
            />
            <button onClick={submit}>
              {pages.button_texts[`send_${locale}`]}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ContactUs)
