import React from "react";
// import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import './Navbar.css'
import {Link} from 'react-router-dom' 



const Navbar = () => {
  return (
    <div className="nav-Container">
      <div className="nav-Wrapper">
        <div className="nav-Left">
          <span className="nav-Language">EN</span>
          <div className="nav-SearchContainer">
            <input className="nav-Input" placeholder="Search ?" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <Link className="nav-Center" to="/">
          <h1 className="nav-Logo">LOGITECH.</h1>
        </Link>
        <div className="nav-Right">
          <Link className="nav-MenuItem" to="/register">Register</Link>
          <Link className="nav-MenuItem" to="/login">Sign-In</Link>
          <div className="nav-MenuItem">
            <Link style={{color:'inherit'}} to="/cart">
            <Badge badgeContent={1} color="primary" >
              <ShoppingCartOutlined fontSize="large" />
            </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
