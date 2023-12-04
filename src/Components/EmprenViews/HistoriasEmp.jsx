import React, { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { Avatar, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import MainNavbar from "../Navbar/MainNavbar";
import { Add, Camera, Home, Message } from "@mui/icons-material";
import { wrap } from "framer-motion";
import "../EmprenViews/Historias.css";
import VideoIcon from '../../images/VideoIcon.png';
import CameraIcon from '../../images/CameraIcon.png';
import GalleryIcon from '../../images/GalleryIcon.png';
import PlusIcon from '../../images/PlusIcon.png';
import lessIcon from '../../images/lessIcon.png';

const TIEMPO_VISIBILIDAD = 24 * 60 * 60 * 1000;

const HistoriasEmp = () => {

  const [historias, setHistorias] = useState([]);

  const HISTORIAS_KEY = "historias";

  // Función para obtener las historias almacenadas en el localStorage
  const obtenerHistoriasGuardadas = () => {
    const historiasGuardadas = localStorage.getItem(HISTORIAS_KEY);
    return historiasGuardadas ? JSON.parse(historiasGuardadas) : [];
  };

  // Obtener historias almacenadas al cargar el componente
  useEffect(() => {
    const historiasGuardadas = obtenerHistoriasGuardadas();
    setHistorias(historiasGuardadas);
  }, []);

  const guardarHistorias = (nuevasHistorias) => {
    localStorage.setItem(HISTORIAS_KEY, JSON.stringify(nuevasHistorias));
  };

  const renderizarContenido = (historia) => {
    return (
      <div className="card__image-holder">
        {historia.tipo === 'imagen' && (
          <img className="card__image" src={historia.contenido} alt="Imagen" />
        )}
        {historia.tipo === 'video' && (
          <video className="card__video" controls>
            <source src={historia.contenido} type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}
        <button onClick={() => eliminarHistoria(historia)}><img className="botonImage2" src={lessIcon}></img>Eliminar</button>
      </div>
    );
  };
  


  const seleccionarDesdeGaleria = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; // Limita la selección a archivos de imagen
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const fotoURL = URL.createObjectURL(file);
        agregarHistoria('imagen',fotoURL);
      }
    };
    input.click();
  };
  

  const agregarHistoria = (tipo, contenido) => {
    const nuevaHistoria = { contenido, tipo };
    const nuevasHistorias = [...historias, nuevaHistoria];
    setHistorias(nuevasHistorias);
    guardarHistorias(nuevasHistorias);

    // Programa la eliminación de la historia después de 24 horas
    setTimeout(() => {
      eliminarHistoria(nuevaHistoria);
    }, TIEMPO_VISIBILIDAD);
  };
  
  const eliminarHistoria = (historia) => {
    // Filtra las historias para excluir la historia que se eliminará
    const nuevasHistorias = historias.filter((h) => h !== historia);
    setHistorias(nuevasHistorias);
    guardarHistorias(nuevasHistorias);
  };

  const tomarFotoDesdeCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");

      // Configura el stream del usuario en el elemento de video
      video.srcObject = stream;
      await video.play();

      // Captura un cuadro de video en un canvas
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Detén el stream de video y limpia los recursos
      stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;

      // Convierte el contenido del canvas a una imagen
      const fotoURL = canvas.toDataURL("image/png");
      agregarHistoria('imagen', fotoURL);
  } catch (error) {
    console.error("Error al acceder a la cámara:", error);
  }
  };

  
  const grabarVideoDesdeCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaRecorder = new MediaRecorder(stream);
      let videoChunks = [];
  
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          videoChunks.push(event.data);
        }
      };
  
      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(videoChunks, { type: 'video/mp4' });
        const videoURL = URL.createObjectURL(videoBlob);
        agregarHistoria('video', videoURL);
        videoChunks = [];
      };
  
      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      }, 30000);
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };
  

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
      <Paper sx={paperStyle}>
        <List>
          <ListItem>
            <Avatar sx={{ marginRight: 3 }} />
            <ListItemText
              sx={{ color: "black", marginRight: 3, flexWrap: wrap }}
            >
              <p>Tortas el chowy</p>{" "}
            </ListItemText>
          </ListItem>
        </List>
        <Box sx={{ display: "flex" }}>
          <List sx={{ padding: "80px" }}>
            <Box sx={{ bgcolor: "#fff" }}>
              <ListItem disablePadding>
                <Link to={"/Home-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to={"/Historias-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>
                      <Camera />
                    </ListItemIcon>
                    <ListItemText>Historias</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to={"/CrearProducto-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>
                      <Add />
                    </ListItemIcon>
                    <ListItemText>Agregar producto</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to={"/Explorar-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>
                      <PublicIcon />
                    </ListItemIcon>
                    <ListItemText>Explorar</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link to={"/ChatEmprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>
                      <Message />
                    </ListItemIcon>
                    <ListItemText>Chats</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            </Box>
          </List>
        </Box>
      </Paper>
      <Box
      sx={{
        marginLeft: "270px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
      }}>
        
        <div className="cards">
        <h2 style={{padding: "20px", textAlign: "center", margin: "70px" , color: "white"}}
        >Puedes agregar imagenes y videos desde la camara o desde tu galeria</h2>
<div className="card">
  <div className="card__image-holder" onClick={tomarFotoDesdeCamara}>
    <img className="card__image" src={CameraIcon} alt="wave" />
    <button><img className="botonImagen" src={PlusIcon}/></button>
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
  </div>
  </div>
  <div className="card">
  <div className="card__image-holder" onClick={seleccionarDesdeGaleria}>
      <img className="card__image" src={GalleryIcon} alt="wave" />
      <button>
        <img className="botonImagen" src={PlusIcon} />
      </button>
    </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
  </div>
  </div>
  <div className="card">
  <div className="card__image-holder" onClick={grabarVideoDesdeCamara}>
    <img className="card__image" src={VideoIcon} alt="wave" />
    <button ><img className="botonImage" src={PlusIcon}/></button>
  </div>
  <div className="card-title">
    <a href="#" className="toggle-info btn">
      <span className="left"></span>
      <span className="right"></span>
    </a>
  </div>
  </div>
  <div className="historia">
  {historias.map((historia) => (
    <div key={historia.contenido}>
      {renderizarContenido(historia)}
      <button></button>
    </div>
  ))}
</div>
    </div>
  
      </Box>
    </Box>
  );
};

export default HistoriasEmp;
