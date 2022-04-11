import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'
import externalLink from '../../../assets/img/externalLint.svg'

const Item = ({ title, url, download }) => {
  const navigate = useNavigate()
  return download ? (
    <a
      className="single_item_wrapper"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon iconName="pdf_file" width={24} height={24} />
      <span>{title}</span>
      <img src={externalLink} alt="" />
    </a>
  ) : (
    <div
      className="single_item_wrapper"
      onClick={() => {
        navigate('/reports?report_type=intermediate&year=' + title)
      }}
    >
      <Icon iconName="pdf_file" width={24} height={24} />
      <span>{title}</span>
      <Icon iconName="about_item_arrow_right" width={24} height={24} />
    </div>
  )
}

const typeOfItermediate = [
  {
    id: 'quartal_1',
    title_hy: 'Առաջին եռամսյակային',
    title_ru: 'Первый квартал',
    title_en: 'The first quarter',
  },
  {
    id: 'quartal_2',
    title_hy: 'Երկրորդ եռամսյակային',
    title_ru: 'Вторая четверть',
    title_en: 'Second quarter',
  },
  {
    id: 'quartal_3',
    title_hy: 'Երրորդ եռամսյակային',
    title_ru: 'Третья четверть',
    title_en: 'Third quarter',
  },
  {
    id: 'quartal_4',
    title_hy: 'Չորրորդ եռամսյակային',
    title_ru: 'Четвертая четверть',
    title_en: 'Fourth quarter',
  },
]

const ReportsContainer = ({
  reportTypes,
  selected,
  isIntermediate,
  selectedReportYear,
}) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const selectedArray = selected ? Object.keys(selected) : []

  return (
    <div className="all_current_container_wrapper">
      {selected ? (
        selectedReportYear ? (
          <div className="selected_report_type">
            {typeOfItermediate.map((elm, index) => (
              <Item
                key={index}
                {...{
                  title: elm[`title_${locale}`],
                  url:
                    selected[selectedReportYear][elm.id].length > 0
                      ? selected[selectedReportYear][elm.id][0][
                          `file_${locale}`
                        ]
                      : '',
                  download: true,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="selected_report_type">
            {selectedArray.map((key, index) => (
              <Item
                key={index}
                {...{
                  title: key,
                  url:
                    selected[key].length > 0
                      ? selected[key][0][`file_${locale}`]
                      : '',
                  download: !isIntermediate,
                }}
              />
            ))}
          </div>
        )
      ) : (
        <div className="branch_container">
          {reportTypes.map(({ id, ...otherProps }, index) => (
            <button
              key={index}
              onClick={() => {
                navigate('?report_type=' + id)
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
