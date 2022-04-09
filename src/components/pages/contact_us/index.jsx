import React, { useContext } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import { TextArea, TextInput } from '../../core/Input'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'
import { GlobalData } from '../../../context/globalData'

const ContactUs = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const contacts = globalData ? globalData.Social : {}

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
                {contacts.Mail && contacts.Mail.map(({ value }) => ` ${value}`)}
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
                  contacts.Mobile.map(({ value }) => ` ${value}`)}
              </span>
            </div>
            <span>{pages.small_texts[`other_methodes_${locale}`]}</span>
            <div className="icon_text_wrapper">
              <Icon
                iconName="contact_watsapp"
                width={24}
                height={24}
                className="icon_wrapper"
              />
              <Icon
                iconName="contact_viber"
                width={24}
                height={24}
                className="icon_wrapper"
              />
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
              className="small_input"
              placeholder={pages.placeholders[`name_${locale}`]}
            />
            <TextInput
              className="small_input"
              placeholder={pages.placeholders[`surname_${locale}`]}
            />
            <TextInput
              className="small_input"
              placeholder={pages.placeholders[`email_${locale}`]}
            />
            <TextInput
              className="small_input"
              placeholder={pages.placeholders[`phone_number_${locale}`]}
            />
            <TextInput
              className="big_input"
              placeholder={pages.placeholders[`address_${locale}`]}
            />
            <TextArea
              className="big_input"
              placeholder={pages.placeholders[`notes_${locale}`]}
            />
            <button>{pages.button_texts[`send_${locale}`]}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ContactUs)
