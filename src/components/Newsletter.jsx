import React from 'react';
import styled from 'styled-components';
import { Send } from '@material-ui/icons';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;
const Input = styled.input`
  font-size: 20px;
  font-weight: 500;
  outline: none;
  padding-left: 20px;
  border: none;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  color: white;
  background-color: #04d4f0;
  border: none;
`;
const Desc = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Send Me The Latest Product Update</Desc>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
