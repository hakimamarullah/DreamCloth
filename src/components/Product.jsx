import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Info = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 120px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  position: relative;
  background-color: #f5fbfd;
  align-content: center;
  justify-content: center;
  

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #e9f5f5;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <Search />
          </Link>
          
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
