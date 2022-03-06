import React from 'react'
import Icon from '../Icon'

export const ButtonWithIcon = React.memo(
  ({ iconName, width, height, onClick, iconProps, ...otherProps }) => {
    return (
      <button onClick={onClick} {...otherProps}>
        <Icon
          iconName={iconName}
          width={width}
          height={height}
          {...iconProps}
        />
      </button>
    )
  }
)
