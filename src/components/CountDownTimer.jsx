import React from 'react'

const CountDownTimer = ({label, value, onChange}) => {
  return (
    <div className='flex flex-col text-center'>
      <label>{label}</label>
      <input className="w-20 bottom-0 outline-none bg-gray-100 text-center" type="number" placeholder="00" value={value} onChange={onChange}/>
    </div>
  )
}

export default CountDownTimer
