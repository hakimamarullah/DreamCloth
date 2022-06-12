import React from 'react';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  text-align: left;
`;
const Center = styled.div`
  flex: 1;
  position: relative;
  border: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  margin-left: 25px;
  cursor: pointer;
`;

// const Language = styled.span`
//   font-size: 20px;
//   cursor: pointer;
// `;

const SearchContainer = styled.div`
border: 1px solid grey;
  display: flex;
  align-items: center;
  width: 100%;
  height:100%;
  position: absolute;
  border-radius: 7px;
  overflow: hidden;
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  padding-left: 10px;
  flex: 8;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>DreamCloth</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <Search style={{ color: 'gray', fontSize: 20, flex:1}} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
