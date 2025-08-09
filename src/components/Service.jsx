
import { useState } from "react";

export const Service = () => {
  const [mostrarMision, setMostrarMision] = useState(false);
const [mostrarVision, setMostrarVision] = useState(false);

  return (
   <section id="service" class="section-padding wow fadeInUp delay-05s">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="service-title pad-bt15">Nosotros</h2>
            <p class="sub-title pad-bt15">En Hotel Los Arcos de Izamal creemos que el 
              descanso debe ser cálido, cómodo y accesible. Desde nuestras habitaciones 
              hasta nuestra atención, trabajamos para que vivas una experiencia inolvidable
               en la Ciudad Amarilla.
<br/>.</p>
            <hr class="bottom-line"/>
          </div>

          <div className="service-item">
  <h3><span>V</span>isión</h3>
  <p>
    Brindar a nuestros huéspedes una experiencia de descanso cómoda, segura 
    y auténtica en el corazón de Izamal, ofreciendo atención personalizada,
    instalaciones limpias y un ambiente que refleje la calidez y hospitalidad yucateca.
  </p>

  {mostrarVision && (
    <div className="extra-info">
      <p>
        Nuestra misión incluye fomentar la cultura local, apoyar el turismo
        responsable y garantizar que cada huésped se sienta como en casa.
      </p>
      <img
        src="/images/vision.jpg"
        alt="Imagen Visión"
        className="img-fluid rounded"
      />
    </div>
  )}

  <button
    className="btn btn-primary mt-2"
    onClick={() => setMostrarVision(!mostrarVision)}
  >
    {mostrarVision ? "Ver menos" : "Ver más"}
  </button>
</div>
<div className="service-item">
  <h3><span>M</span>isión</h3>
  <p>
    Brindar a nuestros huéspedes una experiencia de descanso cómoda, segura 
    y auténtica en el corazón de Izamal, ofreciendo atención personalizada,
    instalaciones limpias y un ambiente que refleje la calidez y hospitalidad yucateca.
  </p>

  {mostrarMision && (
    <div className="extra-info">
      <p>
        Nuestra misión incluye fomentar la cultura local, apoyar el turismo
        responsable y garantizar que cada huésped se sienta como en casa.
      </p>
      <img
        src="/images/mision.jpg"
        alt="Imagen Misión"
        className="img-fluid rounded"
      />
    </div>
  )}

  <button
    className="btn btn-primary mt-2"
    onClick={() => setMostrarMision(!mostrarMision)}
  >
    {mostrarMision ? "Ver menos" : "Ver más"}
  </button>
</div>

            </div>
      </div>
    </section>
  )
}
