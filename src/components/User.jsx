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
        <h2>Datos del Empleado</h2>
        <h3>{empleado.name}</h3>
        <p>Website: {empleado.website} - Username: {empleado.username}</p>
    </div>
  )
}

export default User