import React from 'react';
import { Avatar, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicIcon from '@mui/icons-material/Public';
import MainNavbar from "./../Navbar/MainNavbar";
import { Add, Camera, Home, Message } from '@mui/icons-material';
import { wrap } from 'framer-motion';
import '../ClientsViews/ajustes.css';
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

export function AjustesClient() {

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
                    marginLeft: "270px",
                    padding: "16px",
                    alignItems: "center",
                }}
            >
                <div className="cards">
                    <section className="main-card" id="ajustes">
                        <div className="card-content">
                            <div className="content-left">
                                <img className="full-img" src={userIcon} alt="Unsplash Image" />
                            </div>
                            <div className="content-right">
                                <div className="tag"><h6>Editar perfil</h6></div>
                                <h2 className='user'>Name LastName</h2>
                                <p>Email: @email.com</p>
                                <p>Contact: </p>
                            </div>
                        </div>
                    </section>
                </div>
            </Box>
        </Box>
    );
}

export default AjustesClient;