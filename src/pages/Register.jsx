import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavbarSticky from '../components/NavbarSticky'
import RegisterForm from '../components/RegisterForm'

const Container = styled.div``
const Register = () => {
  return (
   <Container>
    <NavbarSticky/>
    <RegisterForm/>
    <Footer/>
   </Container>
  )
}

export default Register