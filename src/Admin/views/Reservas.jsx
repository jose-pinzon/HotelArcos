
import { HeaderAdmin } from '../components/HeaderAdmin'
import '../css/Reservas.css'

export const Reservas = () => {
  return (
    <>
      <div className='content_reserva'>
          <HeaderAdmin title={'Administrador'} page={'Quejas'} redirect={'quejas'}></HeaderAdmin>
         <table class="table_reserva table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Entrada</th>
              <th scope="col">Salida</th>
              <th scope="col">Habitacion</th>
              <th scope="col">personas</th>
              <th scope="col">niños+12</th>
              <th scope="col">precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Jesus euan pinzon</td>
              <td>euanj5070@gmail.com</td>
              <td>05/08/25</td>
              <td>07/08/25</td>
              <td>Doble</td>
             <td>2</td>
             <td>0</td>
              <td>$450</td>

            </tr>
              <tr>
              <td scope="row">2</td>
              <td>jose raul euan</td>
              <td>raulj5070@gmail.com</td>
              <td>05/08/25</td>
              <td>07/08/25</td>
              <td>Doble</td>
             <td>2</td>
             <td>2</td>
              <td>$550</td>

            </tr>
          </tbody>
        </table>
       
      </div>
    
    </>
  )
}
