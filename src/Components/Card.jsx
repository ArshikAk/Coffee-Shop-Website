import React from 'react'
import "../Styles/style.css"

function Card({logo,content}) {
  return (
    <div className='List'>
      <img src={logo} alt="Image-Not_Found" className='content-image'/>

      <div className='right'>
        <h2>{content}</h2>
        <p className='Time'>4 Min * August 19,2022</p>
      </div>
      <br />
    </div>
  )
}

export default Card
