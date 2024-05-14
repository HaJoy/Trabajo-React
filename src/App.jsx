
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
          <Route path='/' element={<Inicio/>}/>
          <Route path='formulario' element={<Formulario/>}/>
          <Route path='quienessomos' element={<Quienessomos/>}/>
          <Route path='mensaje' element={<Msj nombre={'Usuario'} id={'(No definida aún)'}  url={'https://emma.cuc.edu.co/static/media/logo_cuc.2cabedb7.png'}/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
