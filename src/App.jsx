
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Error from './components/Error'
import Inicio from './components/Inicio'
import Msj from './components/Msj'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Quienessomos from './components/Quienessomos'
import User from './components/User'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      
      <Header/>
      <div className='container'>
        
        

        <Routes>
        <Route path='quienessomos/:id' element={<User/>}/>
          <Route path='/' element={<Inicio url='https://img.freepik.com/fotos-premium/lectura-electronica-libros-electronicos-estudiar-nuevas-habilidades-desarrollo-imaginacion-libro-electronico-abierto-neon-azul-brillante-simbolos-concepto-lectura-libros-papel-libro-electronico-abierto-aprender-ia-generativa_438099-16857.jpg' alt='Libreria'/>}/>
          <Route path='formulario' element={<Formulario/>}/>
          <Route path='quienessomos' element={<Quienessomos/>}/>
          <Route path='mensaje' element={<Msj nombre={'Usuario'} id={'(No definida aún)'}  url={'https://media.istockphoto.com/id/1363779378/photo/online-education-concept.jpg?s=612x612&w=0&k=20&c=Fx2OsUMxAUw86vGFkg_N1b611u9B3NBYx5QFVfKyAFc='} alt='Logo'/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
