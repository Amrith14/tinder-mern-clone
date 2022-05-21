import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Link, useNavigate} from "react-router-dom";

//DS6 ARROW function
function Header({ backButton }) {
  const navigate = useNavigate();
  
  return (
    //BEM
    <div className = "header">

      {backButton ? (
        <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosIcon fontSize="large" className="header__back"></ArrowBackIosIcon>
        </IconButton>
        
      ):(
        <IconButton>
           <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      
      


      <Link to="/">
      <img 
      className="header__logo"
      src = "https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" width="90px"
      height="40px"
      alt="tinder logo"
      />
      </Link>
      

      <Link to="/chat">
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
      </Link>
      
      
    </div>

  );
}

export default Header;

