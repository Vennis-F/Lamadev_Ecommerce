import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import React, { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  /* background-color: coral; */
  position: relative;
`
const Arrow = styled.div`
  height: 40px;
  width: 40px;
  background-color: #fceded;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 80%;
  margin-left: 150px;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.div`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  font-size: 20px;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const clickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => clickHandler("left")}>
        <ArrowLeft />
      </Arrow>
      {sliderItems.map((item) => (
        <Wrapper slideIndex={slideIndex}>
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
      ))}

      <Arrow direction="right" onClick={() => clickHandler("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  )
}

export default Slider
