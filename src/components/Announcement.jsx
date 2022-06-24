import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  width: 100%;
  background-color: #04d4f0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  position: fixed;
  z-index: 10;
  top: 60px;
`;
const Announcement = () => {
  return (
    <Container>
      Summer discount up to 50%, free delivery! This Summer!
    </Container>
  );
};

export default Announcement;
