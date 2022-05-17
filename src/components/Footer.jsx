import {
  Facebook,
  Instagram,
  Interests,
  MailOutlined,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.color};
  color: white;
  margin-right: 5px;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 30px;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 7px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>YU.dev</Logo>
        <Desc>
          Outline chose basis mile quietly morning eat find motion stepped state
          fix principal ride smallest dream white thy of specific for seed
          forgot todayOutline chose basis mile quietly morning eat find motion
          stepped state fix principal ride smallest dream white thy of specific
          for seed forgot today
        </Desc>
        <SocialContainer>
          <SocialItem color="3B5999">
            <Facebook />
          </SocialItem>
          <SocialItem color="E4405F">
            <Instagram />
          </SocialItem>
          <SocialItem color="55ACEE">
            <Twitter />
          </SocialItem>
          <SocialItem color="E60023">
            <Interests />
          </SocialItem>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "5px" }} />
          Dominican Republic
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "5px" }} /> 0375627583
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "5px" }} />
          bumdi@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
