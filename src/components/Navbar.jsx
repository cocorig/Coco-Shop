import React from 'react'
import styled from 'styled-components'
import { CiSearch} from 'react-icons/ci';
import {BsCart} from 'react-icons/bs'



const Wrapper =  styled.div`
  padding:  30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccbcb;
`
//  왼쪽 언어, 검색창
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
// 검색창 박스
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #cccbcb;
  margin-left: 25px;
  padding: 5px;
`
const Lenguage = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.input`
  border: none;
  display: block;
`

//  로고
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo =  styled.h1`
  font-weight: bold;
`
// 장바구니 , 로그인 , 회원가입 
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`
const MenuItem =  styled.div`
  font-size: 14px;
  cursor: pointer;
`
function Navbar() {
  return (
 
      <Wrapper>
        <Left>
          <Lenguage>KO</Lenguage>
          <SearchBox>
            <SearchContainer/>
            <CiSearch size={20}/>
          </SearchBox>
        </Left>
        <Center>
          <Logo>COCO MALL</Logo>
        </Center>
        <Right>
          <MenuItem>
            LOGIN
          </MenuItem>
          <MenuItem>
                JOIN
          </MenuItem>
          <MenuItem>
            <BsCart size={25}/>
          </MenuItem>
        </Right>
      </Wrapper>

  )
}

export default Navbar
