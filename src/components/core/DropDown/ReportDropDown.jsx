import React, { useState } from 'react'
import Icon from '../Icon'

const ReportDropDown = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="report_drop_down_container">
      <div
        className="dropdoen_title_button_container"
        onClick={() => setIsOpened(!isOpened)}
      >
        <p style={{ fontWeight: isOpened ? '700' : '400' }}>{title}</p>
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
      <div className="dropdown_content_wrapper">{isOpened && children}</div>
    </div>
  )
}

export default ReportDropDown
