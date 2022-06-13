import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'

const Container = styled.div``
const Register = () => {
  return (
   <Container>
    <Navbar/>
    <RegisterForm/>
    <Footer/>
   </Container>
  )
}

export default Register