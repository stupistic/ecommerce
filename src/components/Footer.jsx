/* eslint-disable jsx-a11y/anchor-has-content */
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOGITECH.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
          <a href="https://www.instagram.com/abhishek.naagar98/">
            <Instagram /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Press Release</ListItem>
            <ListItem>Career</ListItem>
            <ListItem>Mouse</ListItem>
            <ListItem>Keyboard</ListItem>
            <ListItem>Audio Device</ListItem>
            <ListItem>Mouse Pad</ListItem>
            <ListItem>Collaboration</ListItem>
            </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room/>46 Hasanpur , New Delhi, India</ContactItem>
        <ContactItem>
            <Phone/>+91 98XXXXXXX77
        </ContactItem>
        <ContactItem>
            <MailOutline/>  <a href="http://abhisheknaagar1998@gmail.com">abhisheknaagar1998@gmail.com</a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
