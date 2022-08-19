import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// <---------- CSS-------------------------->
const Info=styled.div`
opacity: 0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;

background-color:rgb(0,0,0,0.2);
z-index:3;
display: flex;
align-items:center;
justify-content: center;
cursor:pointer;
border-style: inset;
border-color: #8ff003;
border-radius: 1%;

    
`;
const Container = styled.div`
  flex: 1;
  /* padding-right: 20px; */
  margin: 6px;
  width: 100%;
  min-width: 250px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222326;
  position: relative;
  transition: all 0.5s ease;

  &:hover ${Info}{
    opacity: 1;
    transition: all 700ms ease;

  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 55%;
  /* width: 90%; */
  z-index: 2;
`;


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

// const Title=styled.h1`
// /* top:0; */
// /* left:0; */
// /* display: block; */
// /* align-items: center; */
//   /* margin-top:10px; */
//   z-index: 4;
//   display: block;
//   position: absolute;
//   margin-bottom: 18.75rem;
//   color:#f5eded;
// ` ;






const Product = ({ item }) => {
  return (
    <Container>
      {/* <Title >{item.title}</Title> */}
      <Circle />
      <Image src={item.img} />
      
      <Info>
        
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item.id}`}>
        <Icon>
          <SearchOutlined />
        </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
export default Product;
