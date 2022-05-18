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
    url("https://images.unsplash.com/photo-1652711899640-ea432c98b25e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170")
      center;
  background-size: cover;
`
const Wrapper = styled.div`
  width: 410px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 8px 2px grey;
  border-radius: 2%;

  /* @media (max-width: 992px) {
    width: 45%;
  } */
  @media (max-width: 768px) {
    width: 355px;
  }
`
const Title = styled.h1`
  font-weight: 200;
  display: flex;
  margin-bottom: 20px;
`

const Form = styled.form``
const Input = styled.input`
  width: 100%;
  margin: 0 10px 20px 0;
  font-size: 18px;
  padding: 10px;
`

const Button = styled.button`
  width: 100%;
  background-color: #008080;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 400 !important;
  padding: 12px 0;
  color: white;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: rgb(0, 118, 118);
  }
  margin-bottom: 20px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #80808061;
  margin: 35px 0 10px 0;
`
const Link = styled.a`
  text-decoration: underline;
  color: #008080;
  display: block;
  cursor: pointer;
  text-align: center;
  &:last-child {
    text-decoration: none;
  }
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
        </Form>
        <Link>Forget password?</Link>
        <Line />
        <Link>Create a new account</Link>
      </Wrapper>
    </Container>
  )
}

export default Login
