import { useState, useEffect} from "react";
import validation from "./validation";
//creo un estado 
const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })
    //creo un nuevo estado 
    const [errors, setErrors] = useState({});

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });    
    };
//con este metodo la pagina no se actualiza cuando se da click en el boton
    const hundleSubmit = (event) =>{
        event.peventDefault();
        login(userData);
    }

    //valida en tiempo real lo q el usuario escribe
    useEffect(()=> {
        if(userData.email !== '' || userData.password !== ''){
        const userValidated = validation(userData);
        setErrors(userValidated);
    }
    },[userData])

    //creo los input

    return(
        <form onSubmit={hundleSubmit}>
            <label htmlFor="email"> Email: </label>
            <input
                type="email" 
                name="email"
                value={userData.email}
                onChange={handleChange}
                />
            
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

            <hr style={{borderStyle: 'none'}}></hr>

            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
                />
            {errors.password && <p style={{color:'red'}}>{errors.password}</p>}



            <hr style={{borderStyle: 'none'}}></hr>

            <button type="submit">submit</button>
        </form>
    )
}

export default Form;
