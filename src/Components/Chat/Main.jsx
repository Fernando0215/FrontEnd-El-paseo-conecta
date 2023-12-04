import { Box, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Navbarra from "./Navbarra";
import Sidebar from "./Sidebar";
import "./Main.css";
import MainNavbar from "./../Navbar/MainNavbar";
import chatImg from "../../images/ImgChat.png";
import { NavLink } from "react-router-dom";
import MessageBubble from "./MessageBubble";

export const Main = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Agregar el nuevo mensaje al estado
      setMessages([...messages, { content: newMessage, type: "text" }]);
      // Limpiar el campo de entrada
      setNewMessage("");
    }
  };
  return (
    <Box>
      <MainNavbar>
            <NavLink to={"/Home-Emprendedor"}><button className="botonRegreso btn"><p>DASHBOARD</p></button></NavLink>
          </MainNavbar>
    <Grid container>
      <Grid item xs={12}>
        <Navbarra />
      </Grid>
      <Grid item xs={5}>
        <Sidebar />
      </Grid>
      <Grid item xs={7}>
        <div className="main-right">
        {messages.map((message, index) => (
            <MessageBubble key={index} content={message.content} type={message.type} />
          ))}
          {/* Formulario para enviar mensajes */}
          <Box display="flex" alignItems="center" mt={2}>
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              Enviar
            </Button>
          </Box>
          <img className="right-image" src={chatImg} />
        </div>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Main;
