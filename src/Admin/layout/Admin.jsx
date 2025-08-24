import { Outlet, useNavigate } from "react-router-dom";
import "../css/Admin.css";

export const Admin = () => {

    const navigate = useNavigate();

    const logout = () => {
       localStorage.removeItem("token")
       navigate('/login')
    }

  return (
    <>
      <div className="reservas_header">
        <h1> Administrador </h1>

        <button type="button" class="btn btn-primary">
          Descargar reporte
        </button>
        <button type="button" onClick={()=> navigate('quejas')} class="btn btn-primary">
          quejas
        </button>
        <button type="button" onClick={() =>navigate('reservas')} class="btn btn-primary">
          reservas
        </button>
        <button type="button" class="btn btn-primary" onClick={()=> logout()}>
          Cerrar sesion
        </button>
      </div>
      <hr />

      
      <Outlet />
    </>
  );
};
