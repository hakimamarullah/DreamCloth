import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
  width: 100vw;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 60px;
  

`;

const Wrapper = styled.div`
  background-color: white;
  width: 30%;
  padding: 20px;
  padding-top: 2px;
  ${mobile({width:"75%"})}
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0px 0px;
  outline-color: #04d4f0;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Register = styled.div`
  font-size: 15px;
  margin: 15px 0px;
  text-align: center;
`;
const ForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 10px 0px 0px;
`;
const Link = styled.a`
  font-size: 15px;
`;

const Text = styled.p``;

const Button = styled.button`
  min-width: 40%;
  padding: 5px;
  margin: 20px 10px 0px 0px;
  font-weight: 500;
  font-size: 20px;
  background-color: #04d4f0;
  color: white;
  border: 1px solid #04d4f0;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.4s ease;

  &:hover {
    opacity: 1;
  }
`;

const LineBreaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: 10px 10px 0px 0px;
`;

const Line = styled.hr`
  float: right;
  width: 100%;
  margin: 5px;
  border-top: 1px solid gray;
  opacity: 0.4;
`;

const GoogleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px 0px 0px;
  border: 1px solid #04d4f0;
  background-color: #04d4f0;
  opacity: 0.8;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const GoogleButton = styled.button`
  border: none;
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  width: 200vw;
  background-color: transparent;
  padding-left: 0px;
  padding-right: 20px;
`;
const LoginForm = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <ForgotPassword>
            <Text>
              <Link href='#' style={{ fontSize: '13px' }}>
                Forgot Password?
              </Link>
            </Text>
          </ForgotPassword>
          <Button>Sign In</Button>
          <Register>
            <Text>
              Doesn't have an account? <Link href='#'>Register</Link>
            </Text>
          </Register>

          <LineBreaker>
            <Line /> OR <Line />
          </LineBreaker>
          <GoogleButtonContainer>
            <IconContainer>
              <Icon src='/images/google.png' />
            </IconContainer>
            <GoogleButton>Sign In with Google</GoogleButton>
          </GoogleButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
