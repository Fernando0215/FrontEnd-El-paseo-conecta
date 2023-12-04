import React, {useState} from 'react'
import { Box } from '@mui/material'
import '../Register/Login.css'
import MainNavbar from '../Navbar/MainNavbar'
import { Link, NavLink } from 'react-router-dom'
import iglesiaIcon from '../../images/iglesiaIcon.jpeg'
import { getClienteByEmail } from '../../services/app.services';
import { useNavigate } from 'react-router-dom';

const LoginCliente = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            navigate('/Home-Cliente');
            console.log('Redirigiendo a /Home-Cliente');
            return;
      
        } catch (error) {
          console.error('Error al realizar la consulta:', error.message);
          // Manejar el error según tus necesidades
        }
      };
      

  return (
    <Box>
        <MainNavbar><NavLink to={"/"}><button className="botonRegreso btn">Inicio</button></NavLink>
            </MainNavbar>
    <div id="card">
    <div id="card-content">
      <div id="card-title">
      <img src={iglesiaIcon} alt="Login" className='icon1'/>
        <h2>LOGIN</h2>
      </div>
      <form method="post" className="form1" onSubmit={handleSubmit}>
        <label htmlFor="user-email" style={{ paddingTop: '10px' }}>
            &nbsp;Email
          </label>
        <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required value={formData.email} onChange={handleChange}/>
        <div className="form-border"></div>
        <label htmlFor="user-password" style={{ paddingTop: '22px' }}>&nbsp;Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password" required value={formData.password} onChange={handleChange}/>
        <div className="form-border"></div>
        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        <Link to={"/Cliente_O_Emp"} id="signup">Dont have account yet?</Link>
      </form>
    </div>
  </div>
  </Box>
  )
}

export default LoginCliente;