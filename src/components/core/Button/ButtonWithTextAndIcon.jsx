import React from 'react'
import Icon from '../Icon'

export const ButtonWithTextAndIcon = React.memo(
  ({ text, iconName, width, height, iconProps, textProps, ...otherProps }) => {
    return (
      <button {...otherProps}>
        <Icon
          iconName={iconName}
          width={width}
          height={height}
          {...iconProps}
        />
        <span {...textProps}>{text}</span>
      </button>
    )
  }
)
