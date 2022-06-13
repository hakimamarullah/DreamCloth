import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
const Container = styled.div``
const Login = () => {
  return (
   <Container>
    <Navbar/>
    {/* <Announcement/> */}
    <LoginForm/>
    <Footer/>
   </Container>
  )
}

export default Login