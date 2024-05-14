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
        <div className="container-fluid title">
            <h1 className='my-3'>Lista de Empleados</h1>
        </div>
        {/* <ul className='list-group mt-5' data-bs-theme="dark">
            
                lista.map((user)=>(<li 
                    className='list-group-item'
                    key={user.id}>{user.name} - {user.email}</li>))
               
                {
                    
                        lista.map((user)=>(<li 
                            className='list-group-item'
                            key={user.id}>
                            <Link to={`/quienessomos/${user.id}`}>{user.name} - {user.email}</Link></li>))
                    
                }
        </ul> */}
        <div className='row mt-3'>
            <div className='table-responsive'>
                <table className='table table-hover' data-bs-theme='dark'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {
                            lista.map((user)=>(
                                    <tr key={user.id}>
                                        <td>
                                            <Link to={`/quienessomos/${user.id}`}>
                                               {user.name} 
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/quienessomos/${user.id}`}>
                                                {user.email}
                                            </Link>
                                        </td> 
                                        
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Quienessomos