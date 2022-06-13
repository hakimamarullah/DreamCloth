import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
    height: 70vh;
    padding: 3px;
    flex: 1;
    position: relative;
    
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({height:"30vh"})}
   
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    background-color: white;
    padding: 10px;
    border: none;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`
const CategoryItem = ({item}) => {
  return (
   <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
   </Container>
  )
}

export default CategoryItem