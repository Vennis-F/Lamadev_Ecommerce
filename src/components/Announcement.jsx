import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: teal;
  color: white;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super deal!!! You can buy the course with only 50% sale price
    </Container>
  )
}

export default Announcement
