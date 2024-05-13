
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Error from './components/Error'
import Contacto from './components/Contacto'
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


function App() {
  

  return (
    <Router>
      
      {/* <Msj nombre='juan' id={123} url='https://emma.cuc.edu.co/static/media/logo_cuc.2cabedb7.png'/>
      <Msj nombre='jose' id={456} url='https://emma.cuc.edu.co/static/media/logo_cuc.2cabedb7.png'/> */}
      
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className='navbar-brand mx-3'>
            <img src="/vite.svg" alt="vite" className="img-fluid" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
              <li className="nav-item mx-2">
                <Link to="/" className='nav-link fw-bolder'>Inicio</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/quienessomos" className='nav-link fw-bolder'>Quiénes Somos</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/mensaje" className='nav-link fw-bolder'>Mensaje</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/formulario" className='nav-link fw-bolder'>Prestamos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Header/>
      <div className='container'>
      {/* <nav>
        <div className='btn-group my-3'>
          <Link to="/" className='btn btn-dark'>Inicio</Link>
          <Link to="/contacto" className='btn btn-dark'>Contacto</Link>
          <Link to="/quienessomos" className='btn btn-dark'>Quiénes Somos</Link>
          <Link to="/mensaje" className='btn btn-dark'>Mensaje</Link>
        </div>
      </nav> */}
        
        

        <Routes>
        <Route path='quienessomos/:id' element={<User/>}/>
          <Route path='/' element={<Inicio/>}/>
          <Route path='formulario' element={<Formulario/>}/>
          <Route path='quienessomos' element={<Quienessomos/>}/>
          <Route path='mensaje' element={<Msj nombre='juan' id={123} url='https://emma.cuc.edu.co/static/media/logo_cuc.2cabedb7.png'/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
