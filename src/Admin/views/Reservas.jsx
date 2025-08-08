
import { collection,  getDocs } from 'firebase/firestore';
import { HeaderAdmin } from '../components/HeaderAdmin'
import '../css/Reservas.css'

import { useEffect, useState } from 'react';
import { db } from '../../db/firebase';

export const Reservas = () => {

const [reservas, SetReservas] = useState([])

 useEffect(() => {
    const obtenerDatos = async () => {
        try {
        const data = await getDocs(collection(db, "reservas"));
          
        const datos = data.docs.map( doc => ({
          id:doc.id,
          ...doc.data()
        })) 

        SetReservas(datos)
      } catch (error) {
        console.error("Error al obtener usuarios: ", error);
      }
    }

    obtenerDatos()
},[])


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
            {
              reservas.map(reserva => (
                    <tr key={reserva.id }>
                      <td scope="row">1</td>
                      <td>{reserva.nombre}</td>
                      <td>{reserva.email}</td>
                      <td>{reserva.fechaEntrada}</td>
                      <td>{reserva.fechaSalida}</td>
                      <td>{reserva.NumPersona}</td>
                      <td>{reserva.NumeroNinios}</td>
                      <td>{reserva.tipoHabitacion}</td>
                      <td>{reserva.tipoPago}</td>
              
                    </tr>
              ))


            }
     
          </tbody>
        </table>
       
      </div>
    
    </>
  )
}

