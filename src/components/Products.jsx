import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #646464;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Submit = styled.button`
padding: 10px;
margin: 10px;
border:none;
background-color: teal;
`;



const Products = ({cat,filters,sort}) => {
  const [item, setitem] = useState(popularProducts);
  // const [filteredProducts,setitem]=useState();
  console.log(filters);
const handle=()=>{
  const category=popularProducts.filter((filter) => {
    return (filter.type === cat.value||filter.tech===filters.technology)})

    
  setitem(category);
}
  useEffect(() => {
    if (sort === "asc") {
      setitem((prev) =>
        [...prev].sort((a, b) => a.id - b.id)
      );
    } else {
      setitem((prev) =>
        [...prev].sort((a, b) => b.id - a.id)
      );
    }
  }, [sort]);


  return (<>
    <Submit onClick={handle}> Search</Submit>
    <Container>

      {item.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};
export default Products;
