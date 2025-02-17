import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id}=useParams()
    const [empleado,setEmpleado]=React.useState([])
    //ejecutar una acción
    React.useEffect(() =>{
        obtenerDato()
    },[])
    const obtenerDato = async() =>{
        const dato=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const emp= await dato.json()
        setEmpleado(emp)
    }
  return (
    <div>
      <div className='container-fluid title my-5'>
        <h1>Datos del Empleado</h1>
      </div>
      <div className="user-container">
        <div className='user-card'>
          <div className="user-card-head px-3">
            <h3>{empleado.name}</h3>
          </div>
          <div className="user-card-info">
            <div className="user-website">
              <p><i className='fa-solid fa-earth-americas me-2 fs-5' /> {empleado.website}</p>
            </div>
            <div className="user-usern">
              <p><i className='fa-solid fa-user me-2 fs-5' /> {empleado.username}</p>
            </div>
          </div>
          
        </div>
      </div>
      
        
    </div>
  )
}

export default User