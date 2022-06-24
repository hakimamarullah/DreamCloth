import React from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { MenuOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  height: 10%;
  width: 100vw;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  flex: 1;
  font-size: 25px;
  font-weight: 600;
`;

const MenuList = styled.ul`
  flex: 1;
  display: flex;
  list-style: none;
  font-size: 20px;
  
`;

const Navbar = styled.nav`
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

  > ul li {
    margin: 0px 10px;
    letter-spacing: 1px;
    font-weight: 400;
    transition: all 0.3s ease;
  }

  ${Logo} {
    margin-right: 5px;
  }

  ${MenuList} {
    margin-right: 30px;
  }
`;

const MenuItem = styled.li`
  &:hover {
    color: #04d4f0;
  }

  color: #${(props)=> props.active === true && "04d4f0"};
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 5px;
  flex: 2;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  padding-left: 10px;
  flex: 8;
`;

const IconContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Login = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  right: 0;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
const NavbarSticky = () => {
  return (
    <Container>
      <Navbar>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
          <Logo>DreamCloth</Logo>
        </Link>
        <MenuList>
          <NavLink style={{ textDecoration: 'none', color:'black'}}  to={'/'}>
            <MenuItem active={({isActive})=> isActive}>Women</MenuItem>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <MenuItem active={({isActive})=> isActive}>Men</MenuItem>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <MenuItem active={({isActive})=> isActive}>Hijab</MenuItem>
          </NavLink>
        </MenuList>
        <SearchContainer>
          <Input placeholder='Search'></Input>
          <Search style={{ color: 'gray', cursor: 'pointer' }} />
        </SearchContainer>
        <Login>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/login'}
          >
            <Button>Login</Button>
          </Link>
        </Login>
        <IconContainer>
          <Badge
            overlap='rectangular'
            badgeContent={0}
            color='primary'
            showZero
          >
            <ShoppingCartOutlined style={{cursor:"pointer"}}/>
          </Badge>
          <MenuOutlined style={{ cursor: 'pointer' }} />
        </IconContainer>
      </Navbar>
    </Container>
  );
};

export default NavbarSticky;
