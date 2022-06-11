import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #04d4f0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    
`
const Announcement = () => {
  return (
    <Container>
        Summer discount up to 50%, free delivery! This Summer!
    </Container>
  )
}

export default Announcement