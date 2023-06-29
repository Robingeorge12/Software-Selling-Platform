import React from "react";
import "./SortDropeBox.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, Box, Typography } from "@material-ui/core";

import { ImFilter } from "react-icons/im";

function SortDropeBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sortdrope-container">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="sortdrope-container-textdiv"
      >
       <Typography>Filter</Typography>  
        <Box className="sortdrope-container-img-div">
          {" "}
          <ImFilter className="sortdrope-container-img-icon" />
        </Box>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>New arrivals</MenuItem>
        <MenuItem onClick={handleClose}>Relevance</MenuItem>
        <MenuItem onClick={handleClose}>Popularity</MenuItem>
        <MenuItem onClick={handleClose}>Price</MenuItem>
        <MenuItem onClick={handleClose}>Evaluation</MenuItem>
    
       
      </Menu>
    </div>
  );
}

export default SortDropeBox;
