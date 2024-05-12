import Imagen from "./Imagen"


const Msj = ({nombre,id,url}) => {
  return (
    <div className='mt-5'>
        <h3>Buenas tardes {nombre}</h3>
        <h4>Su id: {id}</h4>
        <Imagen urlimg={url}/>
    </div>
  )
}

export default Msj