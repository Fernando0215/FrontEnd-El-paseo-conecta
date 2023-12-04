import React, { useState } from "react";
import { Box } from "@mui/material";
import "../Register/RegisterEmp.css";
import MainNavbar from "../Navbar/MainNavbar";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { createEmprendimiento } from "../../services/app.services";
import { createEmprendimientoValidator } from '../../validators/form.Validator';

const RegisterEmp = () => {

    const navigate = useNavigate();

  const initialFormData = {
    nombreEmprendimiento: "",
    imagenEmprendimiento: "",
    infoContacto: "",
    direccion: "",
    descripcion: "",
    correo: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorConfirmation, setShowErrorConfirmation] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting Form Data:', formData);
    console.log("Datos enviados al servidor:", formData);

    const validationErrors = createEmprendimientoValidator(formData);

    setErrorMessages([]);

    if (validationErrors.length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    try {
      await createEmprendimiento(formData);
      console.log('Form Data in createEmprendimiento:', formData);
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
    navigate("/LoginE");
  };

  const closeErrorConfirmation = () => {
    setShowErrorConfirmation(false);
  };

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  return (
    <Box>
      <MainNavbar>
        <NavLink to={"/"}>
          <button className="botonRegreso btn">Inicio</button>
        </NavLink>
      </MainNavbar>
      <div id="card1">
        <div id="card1-content">
          <div id="card1-title">
            <h1 className="h2-1">REGISTRARSE</h1>
            <h3 className="h3">
              Inicia la aventura de emprender, promocionar y dar a conocer tu
              negocio
            </h3>
          </div>
          <form method="post" className="form1" onSubmit={handleSubmit} encType="multipart/form-data">
            <label
              className="label1"
              htmlFor="nombreEmprendimiento"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;nombre del emprendimiento
            </label>
            <input
              id="nombreEmprendimiento"
              name="nombreEmprendimiento"
              className="form1-content"
              type="text"
              required
              value={formData.nombreEmprendimiento}
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
              name="imagenEmprendimiento"
              className="form1-content"
              type="text"
              required
              value={formData.imagenEmprendimiento}
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
              htmlFor="Direccion"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;Direccion
            </label>
            <input
              id="Direccion"
              name="direccion"
              className="form1-content"
              type="text"
              required
              value={formData.direccion}
              onChange={handleChange}
              
            />
            <div className="form1-border"></div>
            <label
              className="label1"
              htmlFor="DescripcionEmp"
              style={{ paddingTop: "10px" }}
            >
              &nbsp;Descripcion emprendimiento
            </label>
            <textarea
              id="DescripcionEmp"
              name="descripcion"
              className="form1-content"
              type="text"
              required
              value={formData.descripcion}
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
              name="correo"
              className="form1-content"
              type="email"
              required
              value={formData.correo}
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
              name="password"
              required
              value={formData.password}
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
              name="confirmPassword"
              required
              value={formData.confirmPassword}
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
            <NavLink to={"/loginE"}><input
              id="submit-boton"
              type="submit"
              name="submit"
              value="LOGIN"
            /></NavLink>
            {showConfirmation == true ?  (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div
                  className="bg-white p-6 rounded-md"
                  style={{ color: "black" }}
                >
                  <p className="text-lg font-semibold mb-4">
                    Emprendimiento creado con exito!
                  </p>
                  <NavLink to={"/loginE"}><button
                    onClick={closeConfirmation}
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    Close
                  </button></NavLink>
                </div>
              </div>
            ):""}
            {showErrorConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <div className="bg-white p-6 rounded-md text-black">
                <p className="text-lg font-semibold mb-4">
                  Un error occurrio mientras se creaba el emprendimiento. Por favor
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
  );
};

export default RegisterEmp;
