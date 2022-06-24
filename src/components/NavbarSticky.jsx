import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { MenuOutlined, Search, ShoppingCartOutlined, CloseOutlined} from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/APICalls';

const Container = styled.div`
  position: fixed;
  height: 10%;
  width: 100vw;
  top: 0;
  z-index: 10;
  overflow: hidden;
`;

const Logo = styled.div`
  flex: 1;
  font-size: 25px;
  font-weight: 600;
  ${mobile({ fontSize: '15px', padding: '5px' })}
`;

const MenuList = styled.ul`
  flex: 1;
  display: flex;
  list-style: none;
  font-size: 20px;
  z-index: 10;
  left: ${(props) => props.left}%;
`;

const Navbar = styled.nav`
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  overflow: hidden;

  > ul li {
    margin: 0px 10px;
    letter-spacing: 1px;
    font-weight: 400;
    transition: all 0.3s ease;

    ${mobile({
      margin: '40px 0',
    })}
  }

  ${MenuList} {
    ${mobile({
      position: 'fixed',
      display: 'block',
      top: '90px',
      backgroundColor: 'white',
      height: '40vh',
      width: '100%',
      textAlign: 'left',
    })}
  ${mobile({transition: 'all 0.3s ease'})}
  }

  ${Logo} {
    margin-right: 5px;
  }

  ${MenuList} {
    margin-right: 30px;
  }

  ${mobile({ padding: '0px 10px' })}
`;

const MenuItem = styled.li`
  &:hover {
    color: #04d4f0;
  }

  color: #${(props) => props.active === true && '04d4f0'};
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 5px;
  flex: 1;
  border-radius: 10px;
  ${mobile({
    width: '5%',
  })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  padding-left: 10px;
  flex: 8;
  ${mobile({
    width: '5%',
  })}
`;

const IconContainer = styled.div`
  width: 10vw;
  margin-left: 10px;
  ${mobile({
    paddingRight: '5px',
  })}
`;


const NavbarSticky = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [menuLeft, setMenuLeft] = useState(-120);

  const collapseHandler = () => {
    if (menuLeft >= 0) {
      setMenuLeft(-120);
    } else {
      setMenuLeft(0);
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    signOut(dispatch);
  };
  const useWindowSize = () => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize(window.innerWidth);
      };
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  };

  return (
    <Container>
      <Navbar>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
          <Logo>DreamCloth</Logo>
        </Link>
        <MenuList left={menuLeft}>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/products/Women'}>
            <MenuItem active={({ isActive }) => isActive}>Women</MenuItem>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/products/men'}>
            <MenuItem active={({ isActive }) => isActive}>Men</MenuItem>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <MenuItem active={({ isActive }) => isActive}>Hijab</MenuItem>
          </NavLink>
          {!user && (
            <NavLink
              style={{ textDecoration: 'none', color: 'black' }}
              to={'/login'}
            >
              <MenuItem active={({ isActive }) => isActive}>
                Login
              </MenuItem>
            </NavLink>
          )}
          {user && (
            <NavLink
              style={{ textDecoration: 'none', color: 'black' }}
              to={'/login'}
            >
              <MenuItem
                active={({ isActive }) => isActive}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </NavLink>
          )}
        </MenuList>
        <SearchContainer>
          <Input placeholder='Search'></Input>
          <Search style={{ color: 'gray', cursor: 'pointer' }} />
        </SearchContainer>

        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/cart'}>
            <IconContainer>
              <Badge
                style={{ display: !user && 'none' }}
                overlap='rectangular'
                badgeContent={quantity}
                color='primary'
                showZero
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconContainer>
        </Link>
        {useWindowSize() <= 415 && (
          <IconContainer>
           {menuLeft < 0 && ( <MenuOutlined
              style={{ cursor: 'pointer' }}
              onClick={collapseHandler}
            />)}
            {menuLeft >=0 && ( <CloseOutlined
              style={{ cursor: 'pointer' }}
              onClick={collapseHandler}
            />)}
          </IconContainer>
        )}
      </Navbar>
    </Container>
  );
};

export default NavbarSticky;
