import React from 'react'
import loader from '../../../public/assets/images/loader.svg'
import './Loader.scss'
const images = () => {
  return (
    
        <div className='loader my-5'>
          <div className='container flex align-center justify-center'>
            <img src = {loader} alt = "" />
          </div>
        </div>
  )
}

export default images
