import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/APICalls';
const Container = styled.div`
  width: 100vw;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 30%;
  padding: 20px;
  padding-top: 2px;
  ${mobile({ width: '75%' })}
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  min-width: 40%;
  padding: 5px;
  margin: 5px 10px 0px 0px;
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
const Login = styled.div`
  font-size: 15px;
  margin: 15px 0px;
  text-align: center;
`;

const Text = styled.p``;

const GoogleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px 0px 0px;
  border: 1px solid #04d4f0;
  background-color: #04d4f0;
  opacity: 0.8;
  margin-bottom: 40px;
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

const Line = styled.hr`
  float: right;
  width: 100%;
  margin: 5px;
  border-top: 1px solid gray;
  opacity: 0.4;
`;

const LineBreaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: 10px 10px 0px 0px;
`;

const Error = styled.span`
  color: red;
  margin-top: 5px;
`;
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const { isFetching, error, message } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    await signUp(dispatch, { fullName, email, password, phone });
    if (!error) {
      navigate('/login');
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Register Account</Title>
        <Form>
          <Input
            placeholder='Full Name'
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Input
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder='Phone Number'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Input
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input placeholder='Confirm Password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister} disabled={isFetching}>
            Sign Up
          </Button>
          {error && <Error>{message}</Error>}
          <Login>
            <Text>
              Already have an account?{' '}
              <Link
                style={{
                  textDecoration: 'none',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
                to={'/login'}
              >
                Login
              </Link>
            </Text>
          </Login>
          <LineBreaker>
            <Line /> OR <Line />
          </LineBreaker>
          <GoogleButtonContainer>
            <IconContainer>
              <Icon src='/images/google.png' />
            </IconContainer>
            <GoogleButton>Sign Up with Google</GoogleButton>
          </GoogleButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterForm;
