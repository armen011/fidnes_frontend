import React from 'react'
import icons from '../../../assets/icon/path.json'

const Icon = ({ iconName, width, height, style, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...{ width, height }}
        dangerouslySetInnerHTML={{ __html: icons[iconName] }}
      ></svg>
    </div>
  )
}

export default React.memo(Icon)
