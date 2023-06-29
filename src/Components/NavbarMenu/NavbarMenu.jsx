import React from 'react'
import "./NavbarMenu.css"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from '@material-ui/core';

function NavbarMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div>


<div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Box className="navbarmenu-icon-box" >< GiHamburgerMenu className="navbarmenu-icon" /></Box>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>

    </div>
  )
}

export default NavbarMenu