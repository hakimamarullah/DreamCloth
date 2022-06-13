import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })};
`;
const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Men Fashion</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Gray</Option>
            <Option>Misty Gray</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Price (ASC)</Option>
            <Option>Price (DESC)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
