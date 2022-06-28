import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatRupiah } from '../formatRupiah';
import { mobile } from '../responsive';

const Info = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  display: flex;
  z-index: 3;
  flex-direction: column;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({fontSize:'15px'})}
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  height: 300px;
  max-width: 200px;
  position: relative;
  background-color: #f5fbfd;
  align-content: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    ${ProductName} {
      text-decoration: underline;
    }
  }

  ${mobile({ flexBasis:'40%', height:'250px' })}
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
  z-index: 2;
  object-fit: scale-down;
`;

const Icon = styled.div`
  margin: 5px 10px;
  display: flex;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const ProductCard = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Link
        style={{ textDecoration: 'none', color: 'black', zIndex: '2' }}
        to={`/product/${item._id}`}
      >
        <Image src={item.img} />
      </Link>

      <Info>
        <Icon>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/product/${item._id}`}
          >
            <ProductName>{item.productName}</ProductName>
          </Link>
        </Icon>
        <Icon>
          <Price>{formatRupiah(item.price)}</Price>
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductCard;
