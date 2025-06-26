import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className='bg-black text-white  rounded-[10px] p-[10px] hover:bg-white hover:text-black'> {props.button} </button>
    </div>
  )
}

export default Buttons
