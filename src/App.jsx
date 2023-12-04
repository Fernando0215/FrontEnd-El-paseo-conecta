import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainEmp from "../src/Components/Chat/Main";
import IntroApp from "./Components/MainPage/IntroApp";
import "./App.css";
import { HomeEmp } from "./Components/EmprenViews/HomeEmp";
import ExplorarEmp from "./Components/EmprenViews/ExplorarEmp";
import ExplorarClient from "./Components/ClientsViews/ExplorarClient";
import HistoriasEmp from "./Components/EmprenViews/HistoriasEmp";
import FormularioProducto from "./Components/EmprenViews/FormularioProducto";
import LoginCliente from "./Components/Register/LoginCliente";
import LoginEmprendedor from "./Components/Register/LoginEmprendedor";
import RegistroEmp from "./Components/Register/RegisterEmp";
import RegistroCliente from "./Components/Register/RegisterCliente";
import Cliente_O_Emp from "./Components/Register/Cliente_O_Emp";
import HomeCliente from "./Components/ClientsViews/HomeClient"
import AjustesClient from "./Components/ClientsViews/AjustesClient"
import HomeClient from "./Components/ClientsViews/HomeClient";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroApp />} />
          <Route path="/Cliente_O_Emp" element={<Cliente_O_Emp />} />
          <Route path="/Registro-Emprendedor" element={<RegistroEmp />} />
          <Route path="/Registro-Cliente" element={<RegistroCliente />} />
          <Route path="/LoginC" element={<LoginCliente />} />
          <Route path="/LoginE" element={<LoginEmprendedor />} />
          <Route path="/Home-Cliente" element={<HomeCliente />} />
          <Route path="/Ajustes-Cliente" element={<AjustesClient />} />
          <Route path="/Explorar-Cliente" element={<ExplorarClient />} />
          <Route path="/ChatEmprendedor" element={<MainEmp />} />
          <Route path="/Home-Emprendedor" element={<HomeEmp />} />
          <Route path="/Home-Cliente" element={<HomeClient />} />
          <Route path="/Ajustes-Cliente" element={<AjustesClient />} />
          <Route path="/Historias-Emprendedor" element={<HistoriasEmp />} />
          <Route
            path="/CrearProducto-Emprendedor"
            element={<FormularioProducto />}
          />
          <Route path="/Explorar-Emprendedor" element={<ExplorarEmp />} />
          <Route path="/Explorar-Cliente" element={<ExplorarClient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;