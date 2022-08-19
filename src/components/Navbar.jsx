import React from "react";
// import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import './Navbar.css'
import {Link} from 'react-router-dom' 
import { mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  color: white;
  background-color: rgb(28, 28, 28);
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  align-items: center;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
  
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration:'none',color: 'inherit'}}>
          <Logo>LOGITECH.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration:'none',color: 'inherit'}}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{textDecoration:'none',color: 'inherit'}}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
          <Link to="/product/Cart" style={{textDecoration:'none',color:'inherit'}}>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};


export default Navbar;
