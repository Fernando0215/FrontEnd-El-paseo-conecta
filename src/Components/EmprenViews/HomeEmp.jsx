import React from 'react';
import { Avatar, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicIcon from '@mui/icons-material/Public';
import MainNavbar from "./../Navbar/MainNavbar";
import { Add, Camera, Home, Message} from '@mui/icons-material';
import { wrap } from 'framer-motion';
import '../EmprenViews/home.css';
import userIcon from '../../images/userIcon.png'

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

export function HomeEmp() {

  return (
//este codigo de aqui es para crear una barra lateral como la de los dashboard principales, sea de emprendedor o cliente
    <Box>
    <Box>
      <MainNavbar />
      </Box>
      <Paper sx={paperStyle}>
      <List>
      <ListItem>
      <Avatar sx={{marginRight: 3 }}/><ListItemText sx={{ color: 'black', marginRight: 3, flexWrap: wrap }}><p>Tortas el chowy</p>  </ListItemText>
              </ListItem>
              </List>
        <Box sx={{ display: 'flex' }}>
        <List sx={{ padding: '80px' }} >
            <Box sx={{ bgcolor: '#fff' }}>
                <ListItem disablePadding>
                <Link to={"/Home-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </ListItemButton>
                </Link>
                </ListItem>
                <ListItem disablePadding>
                <Link to={"/Historias-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon><Camera /></ListItemIcon>
                    <ListItemText>Historias</ListItemText>
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                <Link to={"/CrearProducto-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText>Agregar Producto</ListItemText>
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                <Link to={"/Explorar-Emprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon><PublicIcon /></ListItemIcon>
                    <ListItemText>Explorar</ListItemText>
                  </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                <Link to={"/ChatEmprendedor"}>
                  <ListItemButton sx={item}>
                    <ListItemIcon><Message /></ListItemIcon>
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
          alignItems: "center",
        }}
        >
          <div className="cards">
        <h2 style={{padding: "20px", textAlign: "center", color: "white"}}>Puedes modificar tus productos o cambiar tu foto de perfil, asi como la descripcion de tu negocio</h2>
        <section className="main-card">
        <div className="card-content">
            <div className="content-left">
                <button><img className="full-img" src={userIcon} alt="Unsplash Image"/></button>
            </div>
            <div className="content-right">
                <div className="tag"><h6>Editar perfil</h6></div>
                <h2>Outdoor Experience</h2>
                <p>It’s windy. The cool breeze of the lake. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
        </div>
        </div>
    </section>
  </div>
        </Box>
      </Box>
  );
}

export default HomeEmp;
