import React from 'react'
import Imagen from './Imagen'

const Inicio = ({url = '', alt = ''}) => {

  return (
    <div className='container-fluid home-body shadow'>
      <div className="row">
        <div className="img-container py-5 col-md-6">
          <Imagen urlimg={url} alt={alt} />
        </div>
        <div className="container-fluid home-title py-3 col-md-6">
          <h1 className='my-3'>¡Bienvenido a Mylib!</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Inicio