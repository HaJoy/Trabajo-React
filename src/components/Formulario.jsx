import React from 'react'

const Formulario = () => {
    const [nombre,setNombre] = React.useState('')
    const [apellido,setApellido] = React.useState('')
    const [titulo,setTitulo] = React.useState('')
    const [autor,setAutor] = React.useState('')
    const [editorial,setEditorial] = React.useState('')
    const [anio,setAnio] = React.useState('')
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
    <div className="my-5">
        <h2 className="my-3">Formulario</h2>
        <form onSubmit={guardarUsuario} className="col-lg-6 my-3" data-bs-theme="dark">
            {/* <input type="text" 
            placeholder='Ingrese su Nombre'
            className='form-control mb-3'
            onChange={(e) =>setNombre(e.target.value.trim())}
            />
            <input type="text" 
            placeholder='Ingrese su Apellido'
            className='form-control mb-3'
            onChange={(e) =>setApellido(e.target.value.trim())}
            /> */}
            <div class="input-group">
                <span class="input-group-text mb-3">Ingrese su nombre</span>
                <input type="text" 
                placeholder='Nombre' 
                aria-label="Nombre" 
                class="form-control mb-3"
                onChange={(e) =>setNombre(e.target.value.trim())}
                />
                <input type="text" 
                placeholder='Apellido' 
                aria-label="Apellido" 
                class="form-control mb-3"
                onChange={(e) =>setApellido(e.target.value.trim())}
                />
            </div>
            <div class="input-group">
                <span class="input-group-text mb-3">Datos del libro</span>
                <input type="text" 
                placeholder='Titulo' 
                aria-label="Titulo" 
                class="form-control mb-3"
                onChange={(e) =>setTitulo(e.target.value.trim())}
                />
                <input type="text" 
                placeholder='Autor' 
                aria-label="Autor" 
                class="form-control mb-3"
                onChange={(e) =>setAutor(e.target.value.trim())}
                />
                <input type="text" 
                placeholder='Editorial' 
                aria-label="Editorial" 
                class="form-control mb-3"
                onChange={(e) =>setEditorial(e.target.value.trim())}
                />
                <input type="text" 
                placeholder='Año' 
                aria-label="Anio" 
                class="form-control mb-3"
                onChange={(e) =>setAnio(e.target.value.trim())}
                />
            </div>
            <div className="d-grid gap-2">
                <button className='btn btn-primary mb-3' type='submit'>Registrar</button>
            </div>
        </form>
        <ul className="my-3">
            {
                lista.map((item,index)=>(<li key={index}>{item.nombre} {item.apellido}</li>))
            }
        </ul>
    </div>
  )
}

export default Formulario