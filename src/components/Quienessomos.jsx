import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'


const Quienessomos = () => {
    const [lista,setLista] = React.useState([])
    //se ejecuta una acción
    useEffect(() =>{
        obtenerDatos()
    },[])
    const obtenerDatos=async()=>{
        const datos= await fetch('https://jsonplaceholder.typicode.com/users')
        const empleados=await datos.json()
        setLista(empleados)
    }
  return (
    <div className='mt-5'>
        <h3>Lista de Empleados:</h3>
        <ul className='list-group mt-3' data-bs-theme="dark">
            {/*
                lista.map((user)=>(<li 
                    className='list-group-item'
                    key={user.id}>{user.name} - {user.email}</li>))
                */}
                {
                    
                        lista.map((user)=>(<li 
                            className='list-group-item'
                            key={user.id}>
                            <Link to={`/quienessomos/${user.id}`}>{user.name} - {user.email}</Link></li>))
                    
                }
        </ul>
    </div>
  )
}

export default Quienessomos