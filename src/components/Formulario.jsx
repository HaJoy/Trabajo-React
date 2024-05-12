import React from 'react'

const Formulario = () => {
    const [nombre,setNombre] = React.useState('')
    const [apellido,setApellido] = React.useState('')
    const [lista,setLista] = React.useState([])
    const guardarUsuario=(e) => {
        e.preventDefault()
        //validaciones
        if(!nombre) return alert('Falta el Nombre')
        if(!apellido) return alert('Falta el Apellido')
        //agregando a la lista
        setLista([
            ...lista,
            {nombre,apellido}
        ])
        //limpiar inputs
        e.target.reset()
        //limpiar los estados
        setNombre('')
        setApellido('')
    }
  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={guardarUsuario}>
            <input type="text" 
            placeholder='Ingrese su Nombre'
            className='form-control mb-3'
            onChange={(e) =>setNombre(e.target.value.trim())}
            />
            <input type="text" 
            placeholder='Ingrese su Apellido'
            className='form-control mb-3'
            onChange={(e) =>setApellido(e.target.value.trim())}
            />
            <div className="d-grid gap-2">
            <button className='btn btn-primary' type='submit'>Registrar</button>
            </div>
            <hr />
            <ul>
                {
                    lista.map((item,index)=>(<li key={index}>{item.nombre} {item.apellido}</li>))
                }
            </ul>
        </form>
    </div>
  )
}

export default Formulario