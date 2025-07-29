

export const Header = () => {
  return (
     <div className="header">
                  <div className="bg-color">
                    <header id="main-header">
                      <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                          <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                            <a className="navbar-brand" href="#">Hotel los<span className="logo-dec"> Arcos</span></a>
                          </div>
                          <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                              <li className="active"><a href="#main-header">Inicio</a></li>
                              <li className=""><a href="#feature">Servicios</a></li>
                              <li className=""><a href="#service">Nosotros</a></li>
                              <li className=""><a href="#portfolio">Galeria</a></li>
                              <li className=""><a href="#testimonial">Reservas</a></li>
                              <li className=""><a href="#blog">Habitaciones</a></li>
                              <li className=""><a href="#contact">Contacto</a></li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                    </header>
                    <div className="wrapper">
                      <div className="container">
                        <div className="row">
                          <div className="banner-info text-center wow fadeIn delay-05s">
                            <h1 className="bnr-title">Comodidad y tranquilidad </h1>
                            <h2 className="bnr-sub-title">Bienvenidos a hotel los Arcos!!</h2>
                            <p className="bnr-para">
                              ¡Bienvenido al Hotel Los Arcos de Izamal! 
                              Es un placer recibirte en el corazón de la Ciudad de las Tres Culturas. 
                              Nuestro hotel combina el encanto colonial con la calidez y hospitalidad yucateca,
                               para que vivas una experiencia única e inolvidable. Explora nuestro sitio
                                y descubre nuestras habitaciones, servicios y recomendaciones para 
                                disfrutar de Izamal al máximo. Estamos aquí para ayudarte en lo que necesites.
                                 ¡Disfruta tu estancia y siéntete como en casa!.</p>
                            <div className="brn-btn">
                              <a href="#" className="btn btn-download">Descargar!</a>
                              <a href="#" className="btn btn-more">Learn More</a>
                            </div>
                            <div className="overlay-detail">
                              <a href="#feature"><i className="fa fa-angle-down"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}
