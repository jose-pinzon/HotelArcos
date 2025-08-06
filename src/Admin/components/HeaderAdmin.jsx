


import { useNavigate } from 'react-router-dom';
import '../css/header.css'

export const HeaderAdmin = ({title, page , redirect   }) => {

    const navigate = useNavigate();

    const cambiarPagina = () => {
      navigate(`/admin/${redirect}`)
    }

  return (
    <>
        <div className='reservas_header'> 
          <h1> {title } </h1>

          <button type="button" class="btn btn-primary">Descargar reporte</button>
            <button type="button" onClick={cambiarPagina} class="btn btn-primary">{ page }</button>
            <button type="button" class="btn btn-primary">Cerrar sesion</button>
      
        </div>
            <hr />
  
    </>
  )
}
