
import '../css/quejas.css'

export const Quejas = () => {
  return (
    <div className='content_quejas'>
         <table class="table_quejas table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">#de Habitacion</th>
              <th scope="col">Asunto</th>
              <th scope='col'>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>jesus euan</td>
              <td>17</td>
              <td>baño</td>
              <td>no se va el agua del escusado</td>
            </tr>

          </tbody>
        </table>
    </div>
  )
}
