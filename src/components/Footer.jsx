import React from 'react';
import styled from 'styled-components';
import {
  Instagram,
  Twitter,
  Facebook,
  YouTube,
  WhatsApp,
  Mail,
  LocationCity,
} from '@material-ui/icons';

const Container = styled.div`
  display: flex;
`;

const About = styled.p`
  margin: 20px 0px;
  text-align: justify;
  font-weight: 400;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 32px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Logo = styled.h1`
  font-size: 20px;
  margin-bottom: 2px;
  font-size: 30px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 10px;
`;
const SocialMediaContainer = styled.div`
  display: flex;
`;

const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 300px;
  height: 150px;
  object-fit: cover;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DreamCloth</Logo>
        <About>
          DreamCloth is a new e-commerce run by individual. All products of
          DreamCloth are made by local fashion venture.
        </About>
        <SocialMediaContainer>
          <SocialMediaIcon color='E4405F'>
            <Instagram />
          </SocialMediaIcon>
          <SocialMediaIcon color='55ACEE'>
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon color='3B5999'>
            <Facebook />
          </SocialMediaIcon>
          <SocialMediaIcon color='FF0000'>
            <YouTube />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Looking for some good stuff?</Title>
        <List>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Kids Wear</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>

        <ContactItem>
          <LocationCity style={{ marginRight: '5px' }} />
          Jakarta, Indonesia
        </ContactItem>
        <ContactItem>
          <WhatsApp style={{ marginRight: '5px' }} />
          +62 852-9622-7777
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '5px' }} />
          dreamcloth@gmail.com
        </ContactItem>
        <Payment src='/images/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
