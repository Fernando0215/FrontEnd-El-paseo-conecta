import React from 'react';
import { useHistory } from 'react-router-dom';

  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };


const ProfileHeader = () => {
  return (
    <HeaderContainer>
      <div>

        <div className="imageP"><img src={producto.imagenPortada} /></div>
        <h1>${nombreNegocio}</h1>
        <button className="boton like_btn">Like</button>
        <button className="boton registro_btn" onClick={handleLoginClick}>Registrarse</button>
        
      </div>
    </HeaderContainer>
  );
};

export default ProfileHeader;
