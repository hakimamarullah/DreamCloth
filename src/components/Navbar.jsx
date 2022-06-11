import React from 'react';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  height: 90px;
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
  display: flex;
  align-items: flex-end;
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
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 40vw;
  height: 5vh;
`;

const Input = styled.input`
  border: none;
  width: 95%;
  height: 95%;
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
            <Search style={{ color: 'gray', fontSize: 16 }} />
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
