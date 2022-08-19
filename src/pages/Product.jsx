import { Add, CurrencyRupeeSharp, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { popularProducts } from "../data";
import Cart from "./Cart";
import { Idcontext } from "../Context/Idcontext";

import { createContext } from "react";

const Container = styled.div`
/* background-color: gray; */
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height:90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 300;
`;

const Desc = styled.p`
margin:20px 0px;
`;

const Price = styled.h3`
margin-top: 1.6rem;
font-weight:200;
font-size:50px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size:20px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const{setid}=useContext(Idcontext);
  const location = useLocation();
  const d = location.pathname.split("/")[2];
  const {setquantity}=useContext(Idcontext);
   setid(d-1);
  const {quantity}=useContext(Idcontext);
  const {id}=useContext(Idcontext);
  
  const handlequantity=(type)=>{
    if(type=="dec"){
      quantity>1 && setquantity(quantity-1);
    }else{
      setquantity(quantity+1);
    }
  }

  // const [first, setfirst] = useState(0)
  // const Search=popularProducts[id]

  const handle=(e)=>{
    const data=e.target.value
    console.log(data);


  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={popularProducts[id].img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>
            {popularProducts[id].title}
          </Title>
          <Desc>
            HIGH SPEED TRACKING : Fusion engine delivers one of the highest
            gaming mouse tracking speeds of up to 500 IPS. 
            Requirements :Windows 8, Windows 8.1, Windows 7 or Windows Vista. 
            Length Cable:2.1 m 8 PROGRAMMABLE BUTTONS : Customise your Logitech wired gaming
            mouse and enjoy default configuration straight out of the box or set
            up one-button triggers personal to you and save them to your G402
            USB gaming mouse 
            ON-THE-FLY DPI : Shift through up to four DPI
            settings, from pixel-precise targeting (250 DPI) to lightning-fast
            manoeuvres (4000 DPI)
          </Desc>
          <Price>
            <CurrencyRupeeSharp style={{fontSize:'40px'}} /> {popularProducts[id].price}
          </Price>
          <FilterContainer>
            <Filter>
            <FilterTitle>Quantity</FilterTitle>
            <FilterColor color="white"/>
            <FilterColor color="black"/>
            <FilterColor color="pink"/>
            <FilterColor color="Blue"/>
            <FilterColor color="green"/>
            
            {/* <FilterTitle>Quantity</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1</FilterSizeOption>
                <FilterSizeOption>2</FilterSizeOption>
                <FilterSizeOption>3</FilterSizeOption>
                <FilterSizeOption>4</FilterSizeOption>
                <FilterSizeOption>5</FilterSizeOption>
              </FilterSize> */}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove type='button' style={{fontSize:'25px'}} onClick={()=>handlequantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add type='button' style={{fontSize:'25px'}} onClick={()=>handlequantity("inc")}/>
            </AmountContainer>
{/* <Link to={`/product/Cart/${id}/${quantity}`}> */}
            <Button onChange={handle}>ADD TO CART
            </Button>
            {/* </Link> */}
          </AddContainer>
        </InfoContainer>
        
      </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>
  );
};
// export const PassingData=React.createContext(PropsObject)
export default Product;
