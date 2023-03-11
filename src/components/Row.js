import React from 'react'
import '../css/Row.css'

function Row({color, text}) {
  return (
    <div className='row' style={{backgroundColor: color}}>
      <p>{text}</p>
    </div>
  )
}

export default Row
