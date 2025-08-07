import Swal from 'sweetalert2'
import '../css/Reserva.css'
import withReactContent from 'sweetalert2-react-content'


export const Reserva = () => {

  const MySwal = withReactContent(Swal)

  const HadleSubmit = ( e ) => {
    e.preventDefault();

    MySwal.fire({
       title: "Enviado con exito!",
        icon: "success",
        draggable: true
    })
  }

  return (
     <section id="testimonial" className="wow fadeInUp delay-05s">
      <div class="bg-testicolor">
        <div className="reserva_container">
          <section class="reserva seccion" id="reserva">
            <div class="form-container">
              <h2>Reserva tu habitación</h2>

              <form onSubmit={ HadleSubmit } id="reservaForm" class="reservaForm">
                <div className="reserva_input">
                  <label for="nombre">Nombre completo:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
              
                <div className="reserva_input">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
              
                
                <div className="reserva_input">
                    <label for="telefono">Teléfono:</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10 dígitos"
                    />
                </div>
            
                <div className="reserva_input">
                  <label for="entrada">Fecha de entrada:</label>
                  <input type="date" id="entrada" name="entrada" required />
                </div>

                <div className="reserva_input">
              
                  <label for="salida">Fecha de salida:</label>
                  <input type="date" id="salida" name="salida" required />
                </div>

                <div className="reserva_input">
                    <label for="personas">Número de personas:</label>
                    <select id="personas" name="personas">
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                    </select>
                </div>
            
                <div className="reserva_input">
                  <label for="niños">Número de niños mayores de 12:</label>
                  <select id="niños" name="niños">
                    <option value="0">0</option>
                    <option value="1">1 niños</option>
                    <option value="2">2 niños</option>
                    <option value="3">3 niños</option>
                    <option value="4">4 niños</option>
                  </select>
                </div>
    
                <div className="reserva_input">
                  <label for="habitacion">Tipo de habitación:</label>
                              <select id="habitacion" name="habitacion">
                                <option value="sencilla">Sencilla</option>
                                <option value="doble">Doble</option>
                              </select>
                </div>
            

              <div className="reserva_input">
                  <label for="metodoPago">Tipo de pago:</label>
                  <select id="metodoPago" name="metodoPago">
                    <option value="">Selecciona un método</option>
                    <option value="paypal">PayPal</option>
                    <option value="efectivo">Efectivo</option>
                    </select>
                  
                 
              </div>

                <button type="submit">Reservar</button>
              </form>
              <div class="success-message" id="mensajeExito"></div>
              </div>
          </section>
        </div>
      </div>
    </section>
  )
}
