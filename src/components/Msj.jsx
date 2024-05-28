import React from "react";
import Mensaje from "./Mensaje";

const Msj = ({nombre, id, url}) => {
  const [nombreMsj,setNombreMsj] = React.useState('')
  const [idMsj,setIdMsj] = React.useState('')
  const [user,setUser] = React.useState([{username: nombre, userId: id}])

  const limpiar = () => {
    setNombreMsj('');
    setIdMsj('');
  };
  const cambiarMensaje = (e) => {
    e.preventDefault();
    setNombreMsj(nombreMsj);
    setIdMsj(idMsj);
    if (!nombreMsj) return alert('Falta el nombre');
    if (nombreMsj.length > 30) return alert('El nombre es demasiado extenso');
    if (!idMsj) return alert('Falta el ID');
    if (isNaN(idMsj)) return alert('El ID debe ser un numero entero');
    if (idMsj.length > 6) return alert('El ID no debe superar los 6 digitos');

    let nuevaLista = user;
    nuevaLista[0] = {username: nombreMsj, userId: idMsj};
    setUser(nuevaLista);

    limpiar();
  }
  ;
  return (
    <div className='mt-5'>
      
      <Mensaje nombre={user[0].username} id={user[0].userId} url={url} />
      <div className="btn-container mt-5">
        <button className='btn btn-success' data-bs-toggle='modal' data-bs-target='#modalMsj'>
          <p><i className="fa-solid fa-plus mx-2"></i>Cambiar mensaje</p>
        </button>
      </div>
      
      <div id='modalMsj' className='modal fade' aria-hidden='true' data-bs-theme='dark'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>Cambiar mensaje</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'
                        onClick={limpiar}/>
                    </div>
                    <div className='modal-body'>
                        <input type="hidden" id='id'/>
                        <form onSubmit={cambiarMensaje} data-bs-theme='dark'>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>Nombre</span>
                                <input type='text'
                                placeholder='Nombre' 
                                aria-label='Nombre'
                                id='nombre'
                                className='form-control mb-3'
                                value={nombreMsj}
                                onChange={(e) =>setNombreMsj(e.target.value.trim())}
                                />
                            </div>
                            <div className='input-group'>
                                <span className='input-group-text mb-3'>ID</span>
                                <input type='text' 
                                placeholder='ID' 
                                aria-label='ID'
                                className='form-control mb-3'
                                value={idMsj}
                                onChange={(e) =>setIdMsj(e.target.value.trim())}
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

export default Msj