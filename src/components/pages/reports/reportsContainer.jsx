import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'

const ReportsContainer = ({ branches, selected, setSelected }) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  return (
    <div className="all_current_container_wrapper">
      {selected ? (
        <div></div>
      ) : (
        <div className="branch_container">
          {branches.map(({ id, ...otherProps }, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected({ id, ...otherProps })
                navigate('?report_type_id=' + id)
              }}
            >
              <span>{otherProps[`title_${locale}`]}</span>
              <Icon iconName="about_item_arrow_right" width={24} height={24} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default React.memo(ReportsContainer)
