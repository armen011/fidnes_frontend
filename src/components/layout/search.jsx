import React, { useContext, useEffect, useRef, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from '../../locales'
import { LocaleContext } from '../../context/localeContext'
import { SearchInput } from '../core/Input'

const Search = ({ isSearchOpened, setIsSearchOpened, isHeaderOpened }) => {
  useEffect(() => {})
  const { locale } = useContext(LocaleContext)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const callback = (value) => {
    navigate(`/results?search=${value}`)
    setIsSearchOpened(false)
  }

  return isSearchOpened ? (
    <div
      className="search_wrapper"
      onClick={() => setIsSearchOpened(false)}
      style={isHeaderOpened ? {} : { top: '0' }}
    >
      <div
        className="search_conatiner"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <span>{pages.small_texts[`search_${locale}`]}</span>
        <SearchInput {...{ callback, inputRef, inputValue, setInputValue }} />
      </div>
    </div>
  ) : null
}

export default memo(Search)
