import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import React from "react"
import styled from "styled-components"
import Badge from "@mui/material/Badge"

const Container = styled.div`
  /* color: white;
  background-color: black; */
  height: 70px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  /* justify-content: space-between; */
`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const Language = styled.span`
  font-size: 16px;
`
const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgrey;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Center = styled.div`
  flex: 2;
`
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 40px;
`
const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{ fontSize: 16, color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Yu.dev</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
