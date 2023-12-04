import React from 'react'
import { Box } from '@mui/material'
import '../Register/ClienteOEmp.css'
import MainNavbar from '../Navbar/MainNavbar'
import { Link, NavLink } from 'react-router-dom'

const Cliente_O_Emp = () => {
  return (
    <Box>
        <MainNavbar><NavLink to={"/"}><button className="botonRegreso btn">Inicio</button></NavLink>
            </MainNavbar>
    <div id="card2">
    <div id="card2-content">
      <div id="card2-title">
        <h2 className='h2'>¿CUAL SERA TU ROL?</h2>
        <p>¿Darás a conocer tu emprendimiento o quieres ser un cliente que aproveche las mejores ofertas?</p>
      </div>
      <form method="post" className="form2">
        <Link to={"/Registro-Emprendedor"}><button id="submit2-btn">Emprendedor</button></Link><Link to={"/Registro-Cliente"}><button id="submit3-btn">Cliente</button></Link>
      </form>
    </div>
  </div>
  </Box>
  )
}

export default Cliente_O_Emp;