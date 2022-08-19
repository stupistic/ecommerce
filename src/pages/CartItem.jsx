import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { popularProducts } from "../data";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import { Idcontext } from "../Context/Idcontext";
import { useContext } from "react";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  /* background-color: ${(props) => props.color}; */
`;
const ProductQuantity = styled.div``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;
const SummaryTitle = styled.h1`
  margin-top: 0.1px;
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const CartItem = (props) => {
  const { quantity } = useContext(Idcontext);
  const { id } = useContext(Idcontext);
  const Total = popularProducts[id].price * quantity;
  const Discount = popularProducts[id].Disc * quantity;
  const FInal = Total - Discount;
  console.log(props);
  return (
    <Container>
      <Wrapper>
        <Title>Titile</Title>
        <Top>
          <TopButton>CONTINUE BUYING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Products>
              <ProductDetails>
                <Image src={popularProducts[id].img} />
                <Details>
                  <ProductName>
                    <b>Product:</b>
                    {popularProducts[id].title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>9876578908
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductQuantity>2</ProductQuantity>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>{popularProducts[id].price}</ProductPrice>
              </PriceDetails>
            </Products>
            <Hr />
            {/* <Products>
      <ProductDetails>
        <Image src="https://m.media-amazon.com/images/I/71LjgDxK4gL._SY679_.jpg" />
        <Details>
          <ProductName>
            <b>Product:</b> Randomxyz
          </ProductName>
          <ProductId>
            <b>ID:</b>9876578908
          </ProductId>
          <ProductColor color="black" />
          <ProductQuantity>1</ProductQuantity>
        </Details>
      </ProductDetails>
      <PriceDetails>
        <ProductAmountContainer>
          <Add />
          <ProductAmount>1</ProductAmount>
          <Remove />
        </ProductAmountContainer>
        <ProductPrice>Rs 8000</ProductPrice>
      </PriceDetails>
    </Products> */}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs{Total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
              <SummaryItemPrice>Rs 600</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>Rs -{Discount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs {FInal}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
