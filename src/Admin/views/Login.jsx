
import { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});


    const handleChange  = ( e ) => {


        setValues({
            ...values,
            [e.target.id]:e.target.value
        })
    }   

  
    
    const validate = () => {
        const newErrors = {};
        if (!values.password) newErrors.password = "Coloque una contraseña";

        if (!values.email) {
        newErrors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        newErrors.email = "Ingresa un email válido";
        }

        return newErrors;
    };


    const onSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
        } else {
            // Submit...
            navigate('reservas')  
        }
        
    }


  return (
        <div className="content_login"> 
            <div className='login_body'>
                
                <form onSubmit={ onSubmit } className='login_form' action="">
                    <h1>Inicie sesion</h1>
                    <div className='login_input'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email'
                            onChange={ handleChange }
                            value={values.email}
                            />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

                    </div>
                    <div className='login_input'>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id='password'
                            onChange={ handleChange }
                            value={ values.password }
                            />
                    {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}

                    </div>

                    <div className='login_input'>
                        <input type="submit" value='login' />
                    </div>
                </form>
            </div>
        </div>
    
  )
}
