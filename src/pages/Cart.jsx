
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CartItem } from "./CartItem";
import { Idcontext } from "../Context/Idcontext";
import { useContext, useEffect, useState } from "react";
import { popularProducts } from "../data";

const Container = styled.div``;


const Cart = () => {
  const { id } = useContext(Idcontext);
  
  
  
  // const Search=popularProducts[id]
  

  return (
    <Container>
      <Navbar />
      <Announcement />
      <CartItem  />
      <Footer />
    </Container>
  );
};

export default Cart;
