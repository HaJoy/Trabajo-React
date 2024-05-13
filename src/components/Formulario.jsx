import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css"

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
            {nombre,apellido, titulo, autor, editorial, anio}
        ])
        //limpiar inputs
        e.target.reset()
        //limpiar los estados
        setNombre('')
        setApellido('')
        setTitulo('')
        setAutor('')
        setEditorial('')
        setAnio('')
    }
    const editar = (nombre, apellido, titulo, autor, editorial, anio) => {
        setNombre(nombre)
        setApellido(apellido)
        setTitulo(titulo)
        setAutor(autor)
        setEditorial(editorial)
        setAnio(anio)

        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        })
    }
  return (
    <div className='my-5'>
        <h2 className='my-3'>Formulario</h2>
        <form onSubmit={guardarUsuario} className='my-3' data-bs-theme='dark'>
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
            <div className='input-group'>
                <span className='input-group-text mb-3'>Ingrese su nombre</span>
                <input type='text'
                placeholder='Nombre' 
                aria-label='Nombre'
                className='form-control mb-3'
                onChange={(e) =>setNombre(e.target.value.trim())}
                />
                <input type='text' 
                placeholder='Apellido' 
                aria-label='Apellido'
                className='form-control mb-3'
                onChange={(e) =>setApellido(e.target.value.trim())}
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text mb-3'>Datos del libro</span>
                <input type='text' 
                placeholder='Titulo' 
                aria-label='Titulo' 
                className='form-control mb-3'
                onChange={(e) =>setTitulo(e.target.value.trim())}
                />
                <input type='text'
                placeholder='Autor' 
                aria-label='Autor' 
                className='form-control mb-3'
                onChange={(e) =>setAutor(e.target.value.trim())}
                />
                <input type='text' 
                placeholder='Editorial' 
                aria-label='Editorial' 
                className='form-control mb-3'
                onChange={(e) =>setEditorial(e.target.value.trim())}
                />
                <input type='text' 
                placeholder='Año' 
                aria-label='Anio' 
                className='form-control mb-3'
                onChange={(e) =>setAnio(e.target.value.trim())}
                />
            </div>
            <div className='d-grid gap-2'>
                <button className='btn btn-primary mb-3' type='submit'>Registrar</button>
            </div>
        </form>
        {/* <ul className="my-3">
            {
                lista.map((item,index)=>(<li key={index}>{item.nombre} {item.apellido}</li>))
            }
        </ul> */}
        <div className='row mt-3'>
            <div className='table-responsive'>
                <table className='table table-hover' data-bs-theme='dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Editorial</th>
                            <th>Año</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {
                            lista.map((item,index)=>(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nombre} {item.apellido}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.autor}</td>
                                    <td>{item.editorial}</td>
                                    <td>{item.anio}</td>
                                    <td>
                                        <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalEdit'
                                        onClick={() => editar(item.nombre, item.apellido, item.titulo, item.autor, item.editorial, item.anio)}>
                                            <i className='fa-solid fa-edit'/>
                                        </button>
                                        &nbsp;
                                        <button className='btn btn-danger'>
                                            <i className='fa-solid fa-trash'/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div id='modalEdit' className='modal fade' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>{titulo}</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'/>
                    </div>
                    <div className='modal-body'>
                        <input type="hidden" id='id'/>
                        {/* <div className='input-group mb-3'>
                            <span className='input-group-text'>
                                <i className='fa-solid fa-gift'/>
                            </span>
                            <input type="text" id='nombre' className='form-control' placeholder='Nombre' value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}/>
                        </div> */}
                        
                        <input type='text'
                        placeholder='Nombre' 
                        aria-label='Nombre'
                        className='form-control mb-3'
                        value={nombre}
                        onChange={(e) =>setNombre(e.target.value.trim())}
                        />
                        <input type='text' 
                        placeholder='Apellido' 
                        aria-label='Apellido'
                        className='form-control mb-3'
                        value={apellido}
                        onChange={(e) =>setApellido(e.target.value.trim())}
                        />
                        <input type='text' 
                        placeholder='Titulo' 
                        aria-label='Titulo' 
                        className='form-control mb-3'
                        value={titulo}
                        onChange={(e) =>setTitulo(e.target.value.trim())}
                        />
                        <input type='text'
                        placeholder='Autor' 
                        aria-label='Autor' 
                        className='form-control mb-3'
                        value={autor}
                        onChange={(e) =>setAutor(e.target.value.trim())}
                        />
                        <input type='text' 
                        placeholder='Editorial' 
                        aria-label='Editorial' 
                        className='form-control mb-3'
                        value={editorial}
                        onChange={(e) =>setEditorial(e.target.value.trim())}
                        />
                        <input type='text' 
                        placeholder='Año' 
                        aria-label='Anio' 
                        className='form-control mb-3'
                        value={anio}
                        onChange={(e) =>setAnio(e.target.value.trim())}
                        />
                        <div className='d-grid gap-2'>
                            <button className='btn btn-primary mb-3' type='submit'>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Formulario