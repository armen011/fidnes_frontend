import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'
import { SearchInput } from '../../core/Input'

const ResultItem = ({ title, description, url }) => {
  const navigate = useNavigate()

  return (
    <div className="result_item_wrapper" onClick={() => navigate(url)}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

const searchUrls = {
  loans: (id) => `/loans?loan_id=${id}`,
  about: (id) => `/about?article=${id}`,
  consumer_rights: (id) => `/consumer_rights?consumer_right_id=${id}`,
  menu: () => '/owners',
}

const SearchBar = ({ results }) => {
  const { locale } = useContext(LocaleContext)
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const submit = () => {
    setInputValue('')
    navigate(`/results?search=${inputValue}`)
  }
  return (
    <div className="action_bar_wrapper">
      <div className="input_button_wrapper">
        <SearchInput
          className="custom_search_input"
          {...{ inputValue, setInputValue, callback: submit }}
        />
        <button onClick={submit}>
          {pages.button_texts[`search_${locale}`]}
        </button>
      </div>
      <div className="search_result_container">
        {results.length > 0 ? (
          results.map((elm, index) => (
            <ResultItem
              url={
                elm.installation
                  ? searchUrls[elm.installation](elm.id)
                  : `/news?news_id=${elm.id}`
              }
              title={elm[`title_${locale}`]}
              description={elm[`description_${locale}`]}
              key={index}
            />
          ))
        ) : (
          <div className="no_result_container">
            <Icon iconName="search_48" width={48} height={48} />
            <span>{pages.small_texts[`no_results_${locale}`]}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
