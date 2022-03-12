import React from 'react'
import './style.scss'

export const BurgerButton = ({ isOpened, onClick }) => {
  return (
    <button
      className={`burger_button ${isOpened && 'active'}`}
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </button>
  )
}
