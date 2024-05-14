import React from 'react'
import Imagen from './Imagen'

const Mensaje = ({nombre = '',id = '', url = ''}) => {
  return (
    <div className='msj-container'>
        <div className="container-fluid title my-2">
            <h1>Bienvenido, {nombre}</h1>
        </div>
        <div className="msj-body my-5">
            <h3 className="my-5">Su id: {id}</h3>
            <Imagen urlimg={url}/>
        </div>
    </div>
  )
}

export default Mensaje