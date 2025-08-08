import Swal from 'sweetalert2'
import '../css/Reserva.css'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../db/firebase'

export const Reserva = () => {

const MySwal = withReactContent(Swal)
const [Reserva, setReserva ] = useState({
nombre:'',
email:'',
telefono: 0,
fechaEntrada: null,
fechaSalida: null,
NumPersona:0,
NumeroNinios:0,
tipoHabitacion:'',
tipoPago:null
})

const handdleChange = ( e ) => {
const isNumberField = ['telefono','NumPersona', 'NumeroNinios'].includes(e.target.id)
// //este servira para ir guardando los datos de cada campo
setReserva({
...Reserva,
[e.target.id]: isNumberField ?  +e.target.value : e.target.value
})
}

const HadleSubmit = async ( e ) => {
e.preventDefault();

try {  
      await addDoc(collection(db, "reservas"), Reserva);  
      MySwal.fire({  
        title: "Enviado con exito!",  
        icon: "success",  
        draggable: true  
    })  
    setReserva([])  
  } catch (error) {  
    console.error("Error al agregar documento: ", error);  
       MySwal.fire({  
        title: "No se pudo enviar",  
          icon: "warning",  
          draggable: true  
      })  
  }

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
                <input   
                  type="text"   
                  id="nombre"   
                  name="nombre"   
                  value={Reserva.nombre}  
                  onChange={handdleChange}  
                  required />  
            </div>  
            
            <div className="reserva_input">  
                <label for="email">Correo electrónico:</label>  
                <input   
                    type="email"   
                    id="email"   
                    name="email"   
                    value={Reserva.email}  
                    onChange={handdleChange}  
                    required />  
            </div>  
            
              
            <div className="reserva_input">  
                <label for="telefono">Teléfono:</label>  
                <input  
                  type="number"  
                  id="telefono"  
                  name="telefono"  
                  value={Reserva.telefono}  
                  onChange={handdleChange}  
                  required  
                  pattern="[0-9]{10}"  
                  placeholder="10 dígitos"  
                />  
            </div>  
          
            <div className="reserva_input">  
              <label for="entrada">Fecha de entrada:</label>  
              <input   
                      type="date"   
                      id="fechaEntrada"   
                      name="entrada"   
                      value={Reserva.fechaEntrada}  
                      onChange={handdleChange}  
                      required />  
            </div>  

            <div className="reserva_input">  
            
              <label for="salida">Fecha de salida:</label>  
              <input   
                  type="date"   
                  id="fechaSalida"   
                  name="salida"   
                  value={Reserva.fechaSalida}  
                  onChange={handdleChange}  
                  required />  
            </div>  

            <div className="reserva_input">  
                <label for="personas">Número de personas:</label>  
                <select   
                    id="NumPersona"   
                    name="personas"  
                    value={Reserva.NumPersona}  
                    onChange={handdleChange}  
                    >  
                  <option value="1">1 persona</option>  
                  <option value="2">2 personas</option>  
                  <option value="3">3 personas</option>  
                  <option value="4">4 personas</option>  
                </select>  
            </div>  
          
            <div className="reserva_input">  
              <label for="niños">Número de niños mayores de 12:</label>  
              <select   
                  id="NumeroNinios"   
                  name="niños"  
                  value={Reserva.NumeroNinios}  
                  onChange={handdleChange}  
                  >  
                <option value="0">0</option>  
                <option value="1">1 niños</option>  
                <option value="2">2 niños</option>  
                <option value="3">3 niños</option>  
                <option value="4">4 niños</option>  
              </select>  
            </div>  
  
            <div className="reserva_input">  
              <label for="habitacion">Tipo de habitación:</label>  
                          <select   
                              id="tipoHabitacion"   
                              name="habitacion"  
                              value={Reserva.tipoHabitacion}  
                              onChange={handdleChange}  
                              >  
                            <option value="sencilla">Sencilla</option>  
                            <option value="doble">Doble</option>  
                          </select>  
            </div>  
          

          <div className="reserva_input">  
              <label for="metodoPago">Tipo de pago:</label>  
              <select   
                id="tipoPago"   
                name="metodoPago"  
                value={Reserva.tipoPago}  
                onChange={handdleChange}  
                >  
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