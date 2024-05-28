import React from 'react'

const Imagen = ({urlimg, alt}) => {
  return (
    <div className='mx-3'>
        <img src={urlimg} alt={alt} className='img-fluid'/>
    </div>
  )
}

export default Imagen