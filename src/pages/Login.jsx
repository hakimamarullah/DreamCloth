import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import NavbarSticky from '../components/NavbarSticky'
const Container = styled.div`
`
const Login = () => {
  return (
   <Container>
    <NavbarSticky/>
    <LoginForm/>
    <Footer/>
   </Container>
  )
}

export default Login