import * as React from 'react';
// import Login & Logout 
import {login, logout} from '../../utils'
// import CSS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
         <AppBar color="grey">
          <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restaurant Near
            </Typography>
            <Button color="inherit" onClick={(window.accountId==='')?login:logout}>{(window.accountId==='')?'Login':window.accountId}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar