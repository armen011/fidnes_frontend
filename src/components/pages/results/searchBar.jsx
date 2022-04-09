import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'
import { SearchInput } from '../../core/Input'

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
        {results.length > 0 ? null : (
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
