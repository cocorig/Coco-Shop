import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai';
import {BsCart} from 'react-icons/bs'
import {AiOutlineHeart } from 'react-icons/ai';


const Info  = styled.div`
  opacity: 0;
  width: 100%;
  height:  100%;
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:  all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`

  flex: 1;
  margin: 5px;
  min-width : 280px;
  height: 350px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`
const Img =  styled.img`
  width: 100%;
  height : 100%;
  object-fit: cover;
  z-index: 2;
`
// const Circle =  styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;

// `

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius :  50%;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 5px;
  transition:  all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  
  }
`
function Product({product}) {
  return (
    <Container>
      {/* <Circle/> */}
      <Img src={product.img}/>
      <Info>
        <Icon>
            <AiOutlineSearch size={30}/>
        </Icon>
        <Icon>
            <BsCart size={25}/>
        </Icon>
        <Icon>
            <AiOutlineHeart size={30}/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
