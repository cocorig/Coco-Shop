import React from 'react'
import {BsFillSendFill} from 'react-icons/bs';
import styled from 'styled-components';



const Container =  styled.div`
  height: 60vh;
  background-color: #fdf8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`

const InputContainer =  styled.div`
  width: 50%;
  height: 45px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Input = styled.input`
  border: transparent;
  flex: 9;
  padding-left: 12px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: coral;
    color: #fff;
    cursor: pointer;
    & > svg {
      font-size: 20px;
      vertical-align: middle;
  }
`

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <BsFillSendFill/>
        </Button>
      </InputContainer>

    </Container>
  )
}

export default Newsletter
