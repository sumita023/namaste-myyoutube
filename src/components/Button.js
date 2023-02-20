import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-2 py-1 bg-gray-200 rounded-md m-2'>{name}</button>
    </div>
  )
}

export default Button