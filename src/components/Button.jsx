import React from 'react'

const Button = ({ handleClick, counter}) => {
  return (
    <div>
      <button className='' onClick={handleClick}>Counter</button>
      <p>{counter}</p>
    </div>
  )
}

export default Button
