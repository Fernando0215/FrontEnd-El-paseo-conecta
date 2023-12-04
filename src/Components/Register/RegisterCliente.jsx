import React, { useState } from 'react'
import { Box } from '@mui/material'
import '../Register/RegisterEmp.css'
import MainNavbar from '../Navbar/MainNavbar'
import { NavLink } from 'react-router-dom'
import { createCliente } from "../../services/app.services";
import { createClienteValidator } from '../../validators/form.Validator';
import { useNavigate } from 'react-router-dom';

const RegisterCliente = () => {

    const navigate = useNavigate();

  const initialFormData = {
    nombre: "",
    apellido: "",
    imagenCliente: "",
    infoContacto: "",
    correoElectronico: "",
    contrasenna: "",
    confirmcontrasenna: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorConfirmation, setShowErrorConfirmation] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting Form Data:', formData);
    console.log("Datos enviados al servidor:", formData);

    const validationErrors = createClienteValidator(formData);

    setErrorMessages([]);

    if (validationErrors.length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    try {
      await createCliente(formData);
      console.log('Form Data in createCliente:', formData);
      setShowConfirmation(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      setErrorMessages([error.message]);

      if (error.response && error.response.status === 409) {
        // 409 Conflict status code indicates a duplicate
        setErrorMessages(["Correo, nombre o contacto ya registrados"]);
      } else {
        setErrorMessages([error.message]);
      }
      

      setShowErrorConfirmation(true);
      
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(Object.values(validationErrors));
      return;
    }
  };

  const handleChange = (e) => {
    console.log('Form Data:', formData);
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    navigate("/LoginC");
  };

  const closeErrorConfirmation = () => {
    setShowErrorConfirmation(false);
  };

  return (
    <Box>
        <MainNavbar><NavLink to={"/"}><button className="botonRegreso btn">Inicio</button></NavLink>
            </MainNavbar>
    <div id="card1">
    <div id="card1-content">
    
      <div id="card1-title">
      <h1 className='h2-1'>REGISTRARSE</h1>
      <h3 className='h3'>Descubre negocios, date cuenta de promos y más</h3>

      </div>
      <form method="post" className="form1" onSubmit={handleSubmit} encType="multipart/form-data">
            <label
              className="label1"
              htmlFor="nombreUsuario"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;nombre
            </label>
            <input
              id="nombreUsuario"
              name="nombre"
              className="form1-content"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="apellido"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;apellido
            </label>
            <input
              id="apellido"
              name="apellido"
              className="form1-content"
              type="text"
              required
              value={formData.apellido}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="URL"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;URL foto perfil
            </label>
            <input
              id="URL"
              name="imagenCliente"
              className="form1-content"
              type="text"
              required
              value={formData.imagenCliente}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="Contacto"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;Contacto
            </label>
            <input
              id="Contacto"
              name="infoContacto"
              className="form1-content"
              type="tel"
              required
              value={formData.infoContacto}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="user-email"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;Correo Electronico
            </label>
            <input
              id="user-email"
              name="correoElectronico"
              className="form1-content"
              type="email"
              required
              value={formData.correoElectronico}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="user1-password"
              style={{ paddingTop: "22px" }}
            >
              &nbsp;Password
            </label>
            <input
            id="user1-password"
              className="form1-content"
              type="password"
              name="contrasenna"
              required
              value={formData.contrasenna}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="user2-password"
              style={{ paddingTop: "22px" }}
            >
              &nbsp;confirmar contraseña
            </label>
            <input
            id="user2-password"
              className="form1-content"
              type="password"
              name="confirmcontrasenna"
              required
              value={formData.confirmcontrasenna}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
        {errorMessages.length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <strong className="font-bold">Attention:</strong>
                <ul>
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <NavLink to={"/LoginC"}><input
              id="submit-boton"
              type="submit"
              name="submit"
              value="LOGIN"
            /></NavLink>
            {showConfirmation && (
              <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                <div
                  className="bg-white p-6 rounded-md"
                  style={{ color: "black" }}
                >
                  <p className="text-lg font-semibold mb-4">
                    Usuario creado con exito!
                  </p>
                  <button
                    onClick={closeConfirmation}
                    className="bg-purple-600 text-black px-4 py-2 rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {showErrorConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <div className="bg-white p-6 rounded-md text-white">
                <p className="text-lg font-semibold mb-4">
                  Un error occurrio mientras se creaba el usuario. Por favor
                  intenta nuevamente.
                </p>
                <button
                  onClick={() => {
                    closeErrorConfirmation();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </form>
    </div>
  </div>
  </Box>
  )
}

export default RegisterCliente;