import React from 'react';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  text-align: left;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ marginLeft: '10px' })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center', flex: 4 })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: '14px', marginLeft: '8px' })}
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  ${mobile({ height: '20px' })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  padding-left: 10px;
  flex: 8;
  ${mobile({ width: '60px' })}
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: '18px', padding: '5px' })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <Logo>DreamCloth</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <Search style={{ color: 'gray' }} />
          </SearchContainer>
        </Center>
        <Right>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/login'}
          >
            <MenuItem>Login</MenuItem>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/register'}
          >
            <MenuItem>Register</MenuItem>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/cart'}>
            <MenuItem>
              <Badge overlap='rectangular' badgeContent={4} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
