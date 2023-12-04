import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';

export default function Navbarra() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} sx= {{backgroundColor: "#E9E9E9"}} position="static">
        <Toolbar variant="dense">
          <Avatar/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
