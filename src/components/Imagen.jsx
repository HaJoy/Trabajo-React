import React from 'react'

const Imagen = ({urlimg}) => {
  return (
    <div className='mx-3'>
        <img src={urlimg} alt="logo" className='img-fluid'/>
    </div>
  )
}

export default Imagen