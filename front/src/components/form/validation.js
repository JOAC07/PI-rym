const validation = (userData) => {
    const errors = {};

    if(!/\s+@\s+\.\s+/.test(userData.email)){
        errors.email = 'No es un email valido'
    }
    if(userData.email === ' ') {
        errors.email='el campo no puede estar vacio'
    }
    if(userData.email.legth > 36){
        errors.email='Debe ser menos que 36 caracteres'
    }

    if(!/\d/.test(userData.password)){
        errors.password = 'debe conterner al menos un caracter'
    }

    if(userData.password.legth < 6 ){
        errors.password = 'debe contener al menos 6 caracteres '
    }

    if(userData.password.legth > 10){
      errors.password =  'no puede ser mayor a 10 caracteres '
    }
    
    return errors;
}

export default validation;