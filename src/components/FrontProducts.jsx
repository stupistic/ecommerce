import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  /* padding: 1.25rem; */
  /* width: 100vw; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #646464;
`;

const FrontProducts = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default FrontProducts;