import React from "react";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./MainNavbar.css";
import logo from "../../images/logo.png";
import { deepPurple } from "@mui/material/colors";

const MainNavbar = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: deepPurple[800],
            alignItems: "center",
            display: "flex",
            height: "40px"
          }}
        >
          <img className="logo" src={logo} alt="Logo" style={{ marginBottom: '10px' }} />
          <div>
            <h3 className="title" style={{ marginRight: '400px' }}>El-Paseo-Conecta</h3>
          </div>
          <div>
            {children}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

MainNavbar.propTypes = {
  children: PropTypes.node,
};

export default MainNavbar;
