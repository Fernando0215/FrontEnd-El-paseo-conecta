import { Avatar, List, ListItem, ListItemText, Paper } from '@mui/material';
import React from 'react'

export const Sidebar = () => {
  return (
    <div>
        <Paper elevation={0} sx={{border: "1px solid #D4D4D4"}}>
            <List>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem elevation={0} sx={{border: "1px solid #D4D4D4"}}>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
                <ListItem>
                    <Avatar/>
                    <ListItemText/>
                </ListItem>
            </List>
        </Paper>
    </div>
  )
}


export default Sidebar;
