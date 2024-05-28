import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css"

const Formulario = () => {
    const [nombre,setNombre] = React.useState('')
    const [apellido,setApellido] = React.useState('')
    const [titulo,setTitulo] = React.useState('')
    const [autor,setAutor] = React.useState('')
    const [editorial,setEditorial] = React.useState('')
    const [anio,setAnio] = React.useState('')
    const [objetoI,setObjetoI] = React.useState('')
    const [lista,setLista] = React.useState([])


    const validar = (option, i = -1) => {

        //validar que el formulario este lleno
        if(!nombre) {
            alert('Falta el Nombre');
            return false;
        };
        if(!apellido) {
            alert('Falta el Apellido')
            return false;
        } 
        if(!titulo) {
            alert('Falta el titulo del libro')
            return false;
        } 
        if(!autor) {
            alert('Falta el autor del libro');
            return false;
        } 
        if(!editorial) {
            alert('Falta la editorial del libro');
            return false;
        } 
        if(!anio) {
            alert('Falta el año del libro');
            return false;
        }

        //validar que no exista otro usuario con igual nombre
        let arrayUsuario = lista.filter(user => 
            user.nombre.toLowerCase() == nombre.toLowerCase() &&
            user.apellido.toLowerCase() == apellido.toLowerCase()
        );
        let comparasion = lista.findIndex(user => 
            user.nombre.toLowerCase() == nombre.toLowerCase() &&
            user.apellido.toLowerCase() == apellido.toLowerCase()
        );
        if (option == 1) { //Si se está agregando, no debe haber otro nombre igual
            if (arrayUsuario.length != 0) {
                alert('Ya existe un usuario con ese nombre y apellido');
                return false;
            } 
        }
        if (option == 2) { //Si se esta editando el usuario puede dejar su mismo nombre pero no el de los demas
            console.log(`${arrayUsuario.length} ${i}`);
            if (arrayUsuario.length != 0 && comparasion != i) {
                
                alert('Ya existe un usuario con ese nombre y apellido');
                return false;
            } 
        }
        
        

        //validar que el año sea numerico
        if (isNaN(anio)) {
            alert('El año debe ser un numero entero');
            return false;
        }

        return true;
    }
    const limpiar = () => {
        setNombre('')
        setApellido('')
        setTitulo('')
        setAutor('')
        setEditorial('')
        setAnio('')
    };
    const guardarUsuario=(e) => {
        e.preventDefault()
        //validaciones
        if (!validar(1)) return
        //agregando a la lista
        setLista([
            ...lista,
            {nombre,apellido, titulo, autor, editorial, anio}
        ])
        //limpiar inputs
        e.target.reset()
        //limpiar los estados
        limpiar();
    }
    const abrirModal = (nombre, apellido, titulo, autor, editorial, anio) => {

        setNombre(nombre)
        setApellido(apellido)
        setTitulo(titulo)
        setAutor(autor)
        setEditorial(editorial)
        setAnio(anio)

        let objeto = lista.findIndex(user => 
            user.nombre.toLowerCase() == nombre.toLowerCase() &&
            user.apellido.toLowerCase() == apellido.toLowerCase() &&
            user.titulo.toLowerCase() == titulo.toLowerCase() &&
            user.autor.toLowerCase() == autor.toLowerCase() &&
            user.editorial.toLowerCase() == editorial.toLowerCase() &&
            user.anio == anio
        );
        setObjetoI(objeto);
        console.log(`abrirModal: ${objetoI}`);

        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        })
    }
    const editar = (e) => {
        e.preventDefault();

        //validaciones
        if (!validar(2, objetoI)) return


        let nuevaLista = lista;
        nuevaLista[objetoI] = {nombre, apellido, titulo, autor, editorial, anio};
        
        setLista(nuevaLista);

        limpiar();
    };
    const eliminar = (nombre, apellido, titulo, autor, editorial, anio) => {

        if (!confirm('¿Quiere eliminar este prestamo?')) return;

        let objetivo = lista.findIndex(user => 
            user.nombre.toLowerCase() == nombre.toLowerCase() &&
            user.apellido.toLowerCase() == apellido.toLowerCase() &&
            user.titulo.toLowerCase() == titulo.toLowerCase() &&
            user.autor.toLowerCase() == autor.toLowerCase() &&
            user.editorial.toLowerCase() == editorial.toLowerCase() &&
            user.anio == anio
        );

        setLista(lista.filter(obj => lista.indexOf(obj) != objetivo));
    }
  return (
    <div className='my-5 row'>
        <h2 className='my-3'>Préstamo de libros</h2>
        <form onSubmit={guardarUsuario} className='my-3 main-form col-lg-5' data-bs-theme='dark'>
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
            className='form-control mb-5'
            onChange={(e) =>setApellido(e.target.value.trim())}
            />
        
        
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
            
            <div className='d-grid gap-2'>
                <button className='btn btn-primary mb-3' type='submit'>Registrar</button>
            </div>
        </form>
        <div className='row mt-3 mt-md-1 col-lg-7'>
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
                                    <td className='buttons'>
                                        <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalEdit'
                                        onClick={() => abrirModal(item.nombre, item.apellido, item.titulo, item.autor, item.editorial, item.anio)}>
                                            <i className='fa-solid fa-edit'/>
                                        </button>
                                        &nbsp;
                                        <button className='btn btn-danger' onClick={() => eliminar(item.nombre, item.apellido, item.titulo, item.autor, item.editorial, item.anio)}>
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
        <div id='modalEdit' className='modal fade' aria-hidden='true' data-bs-theme='dark'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>Editar préstamo</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'
                        onClick={limpiar}/>
                    </div>
                    <div className='modal-body'>
                        <input type="hidden" id='id'/>
                        <form onSubmit={editar} data-bs-theme='dark'>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Nombre</span>
                                <input type='text'
                                placeholder='Nombre' 
                                aria-label='Nombre'
                                id='nombre'
                                className='form-control mb-3'
                                value={nombre}
                                onChange={(e) =>setNombre(e.target.value.trim())}
                                />
                            </div>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Apellido</span>
                                <input type='text' 
                                placeholder='Apellido' 
                                aria-label='Apellido'
                                className='form-control mb-3'
                                value={apellido}
                                onChange={(e) =>setApellido(e.target.value.trim())}
                                />
                            </div>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Titulo</span>
                                <input type='text' 
                                placeholder='Titulo' 
                                aria-label='Titulo' 
                                className='form-control mb-3'
                                value={titulo}
                                onChange={(e) =>setTitulo(e.target.value.trim())}
                                />
                            </div>
                            
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Autor</span>
                                <input type='text'
                                placeholder='Autor' 
                                aria-label='Autor' 
                                className='form-control mb-3'
                                value={autor}
                                onChange={(e) =>setAutor(e.target.value.trim())}
                                />
                            </div>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Editorial</span>
                                <input type='text' 
                                placeholder='Editorial' 
                                aria-label='Editorial' 
                                className='form-control mb-3'
                                value={editorial}
                                onChange={(e) =>setEditorial(e.target.value.trim())}
                                />
                            </div>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Año</span>
                                <input type='text' 
                                placeholder='Año' 
                                aria-label='Anio' 
                                className='form-control mb-3'
                                value={anio}
                                onChange={(e) =>setAnio(e.target.value.trim())}
                                />
                            </div>
                            
                            <div className='d-grid gap-2'>
                                <button className='btn btn-primary mb-3' type='submit' data-bs-dismiss='modal'>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Formulario