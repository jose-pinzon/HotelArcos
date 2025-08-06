
import { HeaderAdmin } from '../components/HeaderAdmin'
import '../css/quejas.css'

export const Quejas = () => {
  return (
    <div className='content_quejas'>
        <HeaderAdmin title={'Panel de quejas'} redirect={'reservas'} page={'Reservas'}></HeaderAdmin>
         <table class="table_quejas table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope='col'>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>99889</td>
            </tr>

          </tbody>
        </table>
    </div>
  )
}
