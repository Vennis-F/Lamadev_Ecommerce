import { Add, Remove } from "@mui/icons-material"
import React from "react"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 200;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.button === "continue" ? "transparent" : "black"};
  color: ${(props) => (props.button === "continue" ? "black" : "white")};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.button === "continue" ? "#e6e6e6d3" : "#202020"};
  }
`
const TopTexts = styled.div`
  text-decoration: underline;
`
const TopText = styled.span`
  margin: 0 15px;
`

const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 40px 0;
`
const Info = styled.div`
  /* display: flex; */
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #80808032;
  padding-top: 10px;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  height: 20vh;
  width: 200px;
  object-fit: cover;
`
const Detail = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 23px;
  height: 23px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const Amount = styled.span`
  font-size: 26px;
  margin: 0 10px;
`
const Price = styled.div`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 200;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid #8080806c;
  padding: 20px;
  border-radius: 25px;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
  margin-bottom: 30px;
`
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.type !== "total" ? 20 : 26)}px;
  font-weight: ${(props) => (props.type !== "total" ? 300 : 400)};
  margin-bottom: 20px;
`
const SummaryText = styled.span``
const SummaryPrice = styled.span``
const ButtonBottom = styled.button`
  width: 100%;
  background-color: #008080;
  color: white;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    background-color: #006969;
  }
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton button="continue">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton button="checkout">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/cXFnLLV/3.png" />
                <Detail>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    0969060910
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>10</Amount>
                  <Add />
                </AmountContainer>
                <Price>$30</Price>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Detail>
                  <ProductName>
                    <b>Product: </b>SAKURA SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    0969060910
                  </ProductId>
                  <ProductColor color="brown" />
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>10</Amount>
                  <Add />
                </AmountContainer>
                <Price>$30</Price>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$60</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>$ 5.90</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$ -5.90</SummaryPrice>
            </SummaryItem>
            <SummaryItem style={{ marginBottom: "40px" }} type="total">
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$ -5.90</SummaryPrice>
            </SummaryItem>
            <ButtonBottom>CHECKOUT NOW</ButtonBottom>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
