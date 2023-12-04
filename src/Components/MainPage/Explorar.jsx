import axios from "axios";
import "../EmprenViews/Cards.css";
import Box from "@mui/material/Box";
import { wrap } from "framer-motion";
import { Link } from "react-router-dom";
import MainNavbar from "../Navbar/MainNavbar";
import React, { useEffect, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemButton from "@mui/material/ListItemButton";
import { Add, Camera, Home, Message, Search } from "@mui/icons-material";
import { Avatar, List, ListItem, ListItemText, Paper, InputBase, IconButton } from "@mui/material";

const ExplorarEmp = () => {
  const [productos, setProductos] = useState([]);

  // Obtener productos cuando se carga el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/v1/productos"
        );
        console.log(response);
        setProductos(response.data.data);
      } catch (error) {
        console.error("Error al obtener productos", error);
        // Puedes obtener más información del error
        if (error.response) {
          // La solicitud fue realizada, pero el servidor respondió con un código de estado diferente de 2xx
          console.error("Respuesta del servidor:", error.response.data);
          console.error("Código de estado:", error.response.status);
        } else if (error.request) {
          // La solicitud fue realizada, pero no se recibió ninguna respuesta
          console.error("No se recibió respuesta del servidor");
        } else {
          // Algo sucedió en la configuración de la solicitud que desencadenó un error
          console.error(
            "Error de configuración de la solicitud:",
            error.message
          );
        }
      }
    };

    fetchProductos();
  }, []);

  const item = {
    py: "12px",
    px: 8,
    color: "black",
    "&:hover, &:focus": {
      bgcolor: "#ffe7e5",
    },
  };

  const paperStyle = {
    width: "200px",
    overflow: "auto",
    height: "100vh",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    //este codigo de aqui es para crear una barra lateral como la de los dashboard principales, sea de emprendedor o cliente
    <Box>
      <Box>
        <MainNavbar />
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          padding: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "buscar" }}
          sx={{
            width: "300px",
            height: "30px",
            marginLeft: "auto",
            bgcolor: "#fff",
            padding: "8px",
            borderRadius: "4px",
            marginRight: "8px",
          }}
        />
        <IconButton color="primary" aria-label="search" component="span">
          <Search />
        </IconButton>
      </Box>
      <Box
        sx={{
          marginLeft: "270px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="mainExploreSection">
          <h1>Descubre otros negocios</h1>
          <ul className="cards">
            {productos.map((producto) => (
              <li className="cards_item" key={producto._id}>
                <div className="card">
                  <div className="card_image"><img src={producto.imagenProducto}/></div>
                  <div className="card_content">
                    <h2 className="card_title">{producto.nombreProducto}</h2>
                    <p className="card_text">{producto.descripcionProducto}</p>
                    <p className="card_text">{producto.precio}</p>
                    <button className="boton card_btn">Acción del botón</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </Box>
  );
};

export default ExplorarEmp;
