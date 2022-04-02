import React, { useContext } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import { TextArea, TextInput } from '../../core/Input'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'

const ContactUs = () => {
  const { locale } = useContext(LocaleContext)
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
              <span>Գործ․ հասցե՝ ԱՀ, ք․ Ստեփանակերտ, Մ․ Գոշ 2/33</span>
            </div>
            <div className="icon_text_wrapper">
              <Icon
                iconName="contact_message"
                width={24}
                height={24}
                className="icon_wrapper"
              />
              <span>info@fides.am</span>
            </div>
            <div className="icon_text_wrapper">
              <Icon
                iconName="contact_phone"
                width={24}
                height={24}
                className="icon_wrapper"
              />
              <span>Հեռ․՝ (+374) 47 970197, (+374) 47 960197</span>
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
              <span>(+374) 98 960197</span>
            </div>
          </div>
        </div>
        <div className="sugestion_form_container">
          <span>{pages.small_texts[`dear_client_${locale}`]}</span>
          <span>
            Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները,
            մտահոգությունները կամ ցանկացած խնդրի հետ կապված խնդիրները, որպեսզի
            կարողանանք բարելավել մեր ծառայությունները:
          </span>
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
