import classNames from 'classnames'
import React from 'react'

function Button({ children, className, ...props }) {
  return (
    <button className={classNames('btn', className)} {...props}>
      {children}
    </button>
  )
}

export default Button
