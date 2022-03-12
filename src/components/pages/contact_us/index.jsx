import React from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import { TextArea, TextInput } from '../../core/Input'
import './style.scss'

const ContactUs = () => {
  return (
    <div className="contact_us_wrapper">
      <BreadCrumb title="Հետադարձ Կապ" path={['Գլխավոր', 'Հետադարձ Կապ']} />
      <div className="contact_info_wrapper">
        <div className="info_conatiner">
          <div className="whole_info_wrapper">
            <span>Կապ միջոցներ</span>
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
              <span>Հեռ․՝ (+374) 47 970797, (+374) 47 960197</span>
            </div>
            <span>Այլ միջոցներ</span>
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
          <span>Հարգելի Հաճախորդ</span>
          <span>
            Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները,
            մտահոգությունները կամ ցանկացած խնդրի հետ կապված խնդիրները, որպեսզի
            կարողանանք բարելավել մեր ծառայությունները:
          </span>
          <div className="form_wrapper">
            <TextInput className="small_input" placeholder="Անուն" />
            <TextInput className="small_input" placeholder="Ազգանուն" />
            <TextInput className="small_input" placeholder="Էլ․ հասցե" />
            <TextInput className="small_input" placeholder="Հեռախոսահամար" />
            <TextInput className="big_input" placeholder="Հասցե" />
            <TextArea className="big_input" placeholder="Նշումներ" />
            <button>Ուղարկել</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
