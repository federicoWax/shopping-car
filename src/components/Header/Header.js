import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ userAuth, setUserAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(userAuth && location.pathname === "/login") {
      navigate("/");
    }
  }, [userAuth, location]);

  return (
    <div className="row root">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header margin-header">
            <b>VIRTUAL SHOP </b>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {
              userAuth && <ul className="nav navbar-nav">
              {
                userAuth.modules.map(module => (
                  <li key={module.id}  className="active"><a href="#">{module.option}<span className="sr-only"></span></a></li>
                ))
              }
              </ul>
            }
            <ul className="nav navbar-nav navbar-right ">
            { 
              userAuth 
              ? 
                <div className='margin-right-nav'> 
                  <div className='close-session' onClick={() => setUserAuth()}>Cerrar sesión</div>
                  <div>Usuario: { userAuth?.username } </div>
                </div>
              : 
                <div className='margin-right-nav close-session' onClick={() => navigate("/login")}>Iniciar sesión</div>
            }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  userAuth: PropTypes.object,
  setUserAuth: PropTypes.func
};

export default Header;