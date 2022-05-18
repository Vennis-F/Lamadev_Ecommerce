import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("https://images.unsplash.com/photo-1649877747520-44886a2d88ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160")
      center;
  background-size: cover;
`
const Wrapper = styled.div`
  width: 36%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 7px 1px black;

  @media (max-width: 992px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
const Title = styled.h1`
  font-weight: 200;
  display: flex;
  margin-bottom: 20px;
`
const Form = styled.form``
const Input = styled.input`
  width: 48%;
  margin: 0 10px 20px 0;
  font-size: 18px;
  padding: 10px;

  @media (max-width: 1500px) {
    width: 100%;
  }
`
const Agreement = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
`
const Button = styled.button`
  width: 30%;
  background-color: #008080;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 15px 0;
  color: white;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(0, 118, 118);
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to be processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
