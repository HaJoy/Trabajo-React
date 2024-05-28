import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
                <Link to="/formulario" className='nav-link fw-bolder'>Préstamos</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Header