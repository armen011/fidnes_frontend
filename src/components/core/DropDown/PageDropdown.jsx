import React, { memo, useContext, useState } from 'react'
import { LocaleContext } from '../../../context/localeContext'
import CkContant from '../CkContant'
import Icon from '../Icon'

const PageDropdown = ({ ...otherProps }) => {
  const { locale } = useContext(LocaleContext)
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className="page_dropdown_conatiner">
      <div
        className="dropdoen_title_button_container"
        onClick={() => setIsOpened(!isOpened)}
      >
        <p>{otherProps[`title_${locale}`]}</p>
        <Icon
          iconName={`page_drop_down_${isOpened ? 'close' : 'open'}`}
          className="icon_wrapper"
          width={24}
          height={24}
          style={{
            backgroundColor: isOpened ? '#482003' : '#DFB43C',
          }}
        />
      </div>
      <div className="dropdown_content_wrapper">
        {isOpened && (
          <>
            {otherProps.image && (
              <img
                src={otherProps.image}
                alt="Img"
                style={{
                  maxWidth: '500px',
                  borderRadius: '35px',
                  width: '100%',
                }}
              />
            )}
            <CkContant {...otherProps} />
          </>
        )}
      </div>
    </div>
  )
}

export default memo(PageDropdown)
