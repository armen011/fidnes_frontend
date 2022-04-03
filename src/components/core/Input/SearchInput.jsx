import React, { useContext, useState } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../Icon'

export const SearchInput = ({
  callback,
  inputRef,
  className,
  inputValue,
  setInputValue,
}) => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className={`search_input_wrapper ${className}`}>
      <input
        type="text"
        placeholder={pages.labels[`search_${locale}`]}
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault()
            setInputValue('')
            callback(inputValue)
          }
        }}
        ref={inputRef}
      />
      <Icon
        iconName="search_24"
        width={24}
        height={24}
        className="icon_wrapper"
      />
    </div>
  )
}
