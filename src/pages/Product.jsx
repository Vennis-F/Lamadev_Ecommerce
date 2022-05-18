import { Add, Remove } from "@mui/icons-material"
import React from "react"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 80px;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 80px;
`
const Title = styled.div`
  font-size: 70px;
  font-weight: 300;
  margin-bottom: 40px;
`
const Desc = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 30px;
`
const Price = styled.div`
  font-size: 90px;
  font-weight: lighter;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 20px 0;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.h3`
  font-size: 26px;
  font-weight: 400;
`
const FilterColor = styled.div`
  box-sizing: content-box;
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px 1px #008080;
  }
`
const FilterSize = styled.select`
  padding: 5px;
  margin-left: 5px;
  font-size: 16px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const Amount = styled.div`
  border: 1px solid #008080;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  font-size: 22px;
  font-weight: 400;
`
const Button = styled.button`
  font-size: 24px;
  font-weight: 200;
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #008080;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: #008080d6;
    color: white;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            provident libero tempora qui aspernatur, cupiditate consequatur
            facilis ex quisquam, ducimus nihil, dolores distinctio mollitia id
            officia explicabo necessitatibus quibusdam facere?
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XLL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>{" "}
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
