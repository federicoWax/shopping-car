import React from 'react';
import PropTypes from 'prop-types';
import users from '../../data/users';

const FormLogin = ({ setUserAuth }) => {
  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let user = {};

    for (const [key, value] of formData.entries()) {
      user[key] = value;
    }

    const userAuth = users.find(u => u.username === user.username && u.password === user.password);

    if(!userAuth) {
      alert('Usuario o contraseña incorrecto.');
      return;
    }

    setUserAuth(userAuth);
  }
  
  return (
    <div className='form'>
      <form onSubmit={handleLogin}>
        <div className='input-group'>
          <label>Usuario:</label>
          <input className="form-control" name="username" type="text" />
        </div>
        <br />
        <div  className='input-group'>
          <label>Contraseña:</label>
          <input className="form-control" name="password" type="password" />
        </div>
        <br />
        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  )
}

FormLogin.propTypes = {
  setUserAuth: PropTypes.func.isRequired,
};

export default FormLogin;