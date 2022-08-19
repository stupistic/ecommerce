import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { Announcement } from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container=styled.div`
background-color: #646464;
width:100vw;

`;
const Title=styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

  `;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
  `;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
border:none;
background-color: teal;
${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
  

const ProductList = () => {
  const location= useLocation();
  const cate=location.pathname.split("/")[2]
  const [cat,setCat]=useState('')
  const [filters,setFilters]= useState('')
  const [sort, setSort] = useState("newest");
  const handleFilterscat=(e)=>{
    const value=e.target.value;
    setCat(
      {
        ...filters,
        value,
      })

  }
  const handleFilters=(e)=>{
    const value=e.target.value;
    setFilters(
      {
        ...filters,
        [e.target.name]: value,
      }

    )
  }
  // console.log(filter);

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        
        <Title>Gears</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name='type' onChange={handleFilterscat}>
            <Option>
              Type
            </Option>
            <Option>Mouse</Option>
            <Option>KeyBoard</Option>
            <Option>HeadSet</Option>
            <Option>MousePads</Option>
            <Option>Merchandise</Option>
          </Select>
            <Select name="technology" onChange={handleFilters}>
            <Option>
              TECHNOLOGY
            </Option>
            <Option>Pro-G Driver Technology</Option>
            <Option>DTS Headphone X</Option>
            <Option>LIGHTSYNC RGB</Option>
            <Option>DTS Surround Sound Technology</Option>
            <Option>BLUE V0!CE Mic Technology</Option>
          </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" selected>Newest</Option>
            <Option value="asc">Price (Low-High)</Option>
            <Option value="desc">Price (High-Low)</Option>
          </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>

    </Container>

    )
}

export default ProductList;
