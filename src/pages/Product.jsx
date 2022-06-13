import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Remove, Add } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const Info = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 2px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 15px;
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
  
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1.5px solid #04d4f0;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #04d4f0;
        color: white;
    }

`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
        </ImageContainer>
        <Info>
          <Title>Mens Jake Guitar Vintage Crusher Tee</Title>
          <Desc>
            Men fashion guitar vintage crusher tee. Buy now for discounted
            price!
          </Desc>
          <Price>Rp200.000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='cyan' />
              <FilterColor color='green' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
