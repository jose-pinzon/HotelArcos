import { useState } from "react";

export const Blog = () => {
  const [mostrarSencilla, setMostrarSencilla] = useState(false);
  const [mostrarDoble, setMostrarDoble] = useState(false);

  return (
    <section id="blog" className="section-padding wow fadeInUp delay-05s">
      <div className="container">
        <div className="row">
          {/* Título */}
          <div className="col-md-12 text-center">
            <h2 className="service-title pad-bt15">HABITACIONES</h2>
            <p className="sub-title pad-bt15">
              Descubre nuestras habitaciones básicas en el corazón de Izamal,
              diseñadas para ofrecer comodidad, funcionalidad y una excelente
              relación calidad-precio en un entorno colonial encantador.
            </p>
            <hr className="bottom-line" />
          </div>

          {/* Habitación sencilla */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="blog-sec">
              <div className="blog-img">
                <img src="images/habitacion-sencilla.jpg" className="img-responsive" />
              </div>
              <div className="blog-info">
                <h2>Habitación sencilla</h2>
                <div className="blog-comment">
                  <p>Precio: <span>$400</span></p>
                </div>
                <p>
                  "Cómoda y acogedora" habitación equipada con una cama matrimonial.
                  Ideal para una o dos personas que buscan descanso y economía.
                </p>

                {mostrarSencilla && (
                  <ul className="lista-servicios">
                    <li>📺 TV</li>
                    <li>🚿 Baño</li>
                    <li>🛏️ Cama</li>
                    <li>📶 Wifi</li>
                    <li>❄️ Clima</li>
                  </ul>
                )}

                <button
                  className="btn btn-primary mt-2"
                  onClick={() => setMostrarSencilla(!mostrarSencilla)}
                >
                  {mostrarSencilla ? "Ver menos" : "Ver más"}
                </button>
              </div>
            </div>
          </div>

          {/* Habitación doble */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="blog-sec">
              <div className="blog-img">
                <img src="images/habitacion-doble.jpg" className="img-responsive" />
              </div>
              <div className="blog-info">
                <h2>Habitación doble</h2>
                <div className="blog-comment">
                  <p>Precio: <span>$450</span></p>
                </div>
                <p>
                  "Espaciosa y cómoda" habitación con dos camas matrimoniales,
                  perfecta para familias pequeñas o amigos viajando juntos.
                </p>

                {mostrarDoble && (
                  <ul className="lista-servicios">
                    <li>📺 TV</li>
                    <li>🚿 Baño</li>
                    <li>🛏️ Camas</li>
                    <li>📶 Wifi</li>
                    <li>❄️ Clima</li>
                  </ul>
                )}

                <button
                  className="btn btn-primary mt-2"
                  onClick={() => setMostrarDoble(!mostrarDoble)}
                >
                  {mostrarDoble ? "Ver menos" : "Ver más"}
                </button>
              </div>
            </div>
          </div>

          {/* Costo adicional */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="blog-sec">
              <div className="blog-img">
                <img src="images/e1.jpg" className="img-responsive" />
              </div>
              <div className="blog-info">
                <h2>Costo adicional</h2>
                <div className="blog-comment">
                  <p>Precio: <span>$50</span></p>
                </div>
                <p>
                  El costo adicional por persona adulta y niños mayores de 12 años
                  genera un costo extra a partir de $50. Este cargo puede variar
                  según la temporada y el tipo de habitación seleccionada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
