/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
export const Announcement = () => {
  return (
    <Container>
        Buy now the new Dhabodi range of Logitech G fury.  <a href="#">Learn More</a>
    </Container>
    
  )
}
