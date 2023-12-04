
import React, { useState, useEffect } from 'react';
import { Avatar, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicIcon from '@mui/icons-material/Public';
import MainNavbar from "./../Navbar/MainNavbar";
import { Add, Camera, Home, Message } from '@mui/icons-material';
import { wrap } from 'framer-motion';
import '../ClientsViews/homeCl.css';
import heartIcon from '../../images/heartIcon.png';
import heartFullIcon from '../../images/heartFullIcon.png';
import axios from 'axios';

export function HomeClient() {

    const [emprendimientos, setEmprendimientos] = useState([]);

    // Obtener productos cuando se carga el componente
    useEffect(() => {
      const fetchEmprendimientos = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3002/api/v1/emprendimientos"
          );
          console.log(response);
          setEmprendimientos(response.data.data);
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
  
      fetchEmprendimientos();
    }, []);

    const handleLikeClick = (emprendimientoId) => {
        // Lógica para cambiar el estado de leGusto para el emprendimiento con el emprendimientoId
        const nuevosEmprendimientos = emprendimientos.map((emprendimiento) =>
          emprendimiento._id === emprendimientoId
            ? { ...emprendimiento, leGusto: !emprendimiento.leGusto }
            : emprendimiento
        );
        
        // Imprimir el estado actualizado
        console.log('Emprendimientos después de hacer clic en Me gusta:', nuevosEmprendimientos);
      
        // Actualizar el estado con los nuevos emprendimientos
        setEmprendimientos(nuevosEmprendimientos);
      };
      
const item = {
    py: '12px',
    px: 8,
    color: 'black',
    '&:hover, &:focus': {
      bgcolor: '#ffe7e5',
    },
  };
  

const paperStyle = {
    width: '200px',
    overflow: 'auto',
    height: '100vh',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };


  return (
    //este codigo de aqui es para crear una barra lateral como la de los dashboard principales, sea de emprendedor o cliente
    <Box>
    <Box>
        <MainNavbar />
    </Box>
      <Paper sx={paperStyle}>
      <List>
            <ListItem>
                <Avatar sx={{ marginRight: 3 }} />
                <ListItemText
                    sx={{ color: "black", marginRight: 3, flexWrap: wrap }}
                >
                    <p>Usuario</p>{" "}
                </ListItemText>
            </ListItem>
        </List>
        <Box sx={{ display: "flex" }}>
            <List sx={{ padding: "80px" }}>
                <Box sx={{ bgcolor: "#fff" }}>
                    <ListItem disablePadding>
                        <Link to={"/Home-Cliente"}>
                            <ListItemButton sx={item}>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to={"/Ajustes-Cliente"}>
                            <ListItemButton sx={item}>
                                <ListItemIcon>
                                    <Camera />
                                </ListItemIcon>
                                <ListItemText>Ajustes</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to={"/Explorar-Cliente"}>
                            <ListItemButton sx={item}>
                                <ListItemIcon>
                                    <PublicIcon />
                                </ListItemIcon>
                                <ListItemText>Explorar</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </Box>
            </List>
        </Box>
      </Paper>
      <Box
        sx={{
          marginLeft: '270px',
          padding: '16px',
          alignItems: 'center',
        }}
      >
        {/* Contenido principal */}
        <div className="cards">
          {emprendimientos.map((emprendimiento) => (
            <section key={emprendimiento._id} className="main-card">
              <div className="card-content">
                <div className="content-left">
                  {/* Reemplaza la imagen con la foto de perfil del emprendimiento */}
                  <button>
                    <img className="full-img" src={emprendimiento.imagenEmprendimiento} alt={emprendimiento.nombreEmprendimiento} />
                  </button>
                </div>
                <div className="content-right">
                  {/* Utiliza el nombre y la descripción del emprendimiento */}
                  <h2 className="EmprenName">{emprendimiento.nombreEmprendimiento}</h2>
                  <p>{emprendimiento.descripcion}</p>
                  <button onClick={handleLikeClick}>
                    {/* Cambia la imagen del corazón en función del estado del emprendimiento (le gustó o no) */}
                    <div className="tag">
                      <img className="icon" src={heartIcon} alt="Corazón" />
                    </div>
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default HomeClient;
