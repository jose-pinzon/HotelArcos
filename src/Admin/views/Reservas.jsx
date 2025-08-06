
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
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
       
      </div>
    
    </>
  )
}
