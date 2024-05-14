

const Footer = () => {
  return (
    <div className="container-fluid shadow-lg footer">
        <div className="row footer-container container-fluid">
            <div className="brand-mark col-md-4">
                <h1>MyLib</h1>
            </div>
            <div className="socials col-md-4">
                <h3>Redes sociales</h3>
                <div className="socials-icons">
                    <a title="Facebook" href="#" className="mx-2"><i className="fa-brands fa-facebook-f"></i></a>
                    <a title="Twitter" href="#" className="mx-2"><i className="fa-brands fa-x-twitter"></i></a>
                    <a title="Instagram" href="#" className="mx-2"><i className="fa-brands fa-instagram"></i></a>
                    <a title="Pinterest" href="#" className="mx-2"><i className="fa-brands fa-pinterest-p"></i></a>
                    <a title="Github" href="#" className="mx-2"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="made-by col-md-4">
                <p>Hecho por Hammer Cano</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer