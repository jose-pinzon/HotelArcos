
import { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ disabled, setDisable ] = useState(false)
    const [ error, setError ] = useState([])

    const handleChange  = ( e ) => {
        let value = e.target.value

        if (e.target.id == 'Email') {
            
           setEmail( value )
        }else{
            setPassword(value )
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        // emailRegex.test( email ) 

        // if ( email == '') {
        //     setError(error => [...error, 'El correo esta vacio']) 
        //     return
        // }

        // if (password == '') {
        //     setError(error => [...error, 'La contraseña esta vacia']) 
        //     return
        // }


        navigate('reservas')  

    }

  return (
        <div className="content_login"> 
            <div className='login_body'>
                
                <form onSubmit={ onSubmit } className='login_form' action="">
                    {
                        error != [] && error.map( err => <p > { err }</p>)
                    }
                    <h1>Inicie sesion</h1>
                    <div className='login_input'>
                        <label htmlFor="Email">Email</label>
                        <input 
                            type="email" 
                            id='Email'
                            onChange={ handleChange }
                            value={email}
                            />
                        {
                            <span> correo incorrecto </span>
                        }
                    </div>
                    <div className='login_input'>
                        <label htmlFor="Password">Contraseña</label>
                        <input 
                            type="password" 
                            id='Password'
                            onChange={ handleChange }
                            value={ password }
                            />
                    </div>

                    <div className='login_input'>
                        <input type="submit" value='login' disabled={ disabled }/>
                    </div>
                </form>
            </div>
        </div>
    
  )
}
