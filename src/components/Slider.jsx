import React, { useState } from 'react'
import styled from 'styled-components'
import {BsArrowLeftShort , BsArrowRightShort} from 'react-icons/bs'
import {sliderItems} from '../data';

const Container =  styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

`
//  슬라이드 버튼
const Arrow = styled.div`

  width: 50px;
  height: 50px;
  background-color: #e6e4e4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #000000;
  position: absolute;
  top: 0;
  bottom: 0;
  margin:auto;
  left: ${(props) =>  props.direction ===  'left' && '20px'};
  right: ${(props) =>  props.direction ===  'right' && '20px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper =  styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  /* transform: translateX(0vw -> -100vw -> -200vw -> 0vw ...); */
  transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
`
const Slide =  styled.div`
  width: 100vw;
  height: 100vh;
  display:  flex;
  align-items: center;
  /* background-color: ${(props) => props.bg}; */
`

const ImgContainer =  styled.div`
  height: 100%;
  flex: 2;
`
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;

`
// 타이틀 + 설명 + 버튼 
const InfoContainer =  styled.div`
  padding: 50px;
  z-index: 1;
  flex : 1.5;
`
const Title =  styled.h2`
  font-size: 70px;
  font-weight: 600;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
`
const Button =  styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  box-shadow: 1px 1px 5px #868484;
  cursor: pointer;
`

function Slider() {

  const [slideIndex , setSlideIndex] = useState(0);
  const handClick =  (direaction)=>{
    
    if(direaction === 'left'){
      // console.log(slideIndex);
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
    }else if(direaction === 'right'){
      // console.log(slideIndex);
      setSlideIndex(slideIndex < sliderItems.length - 1  ?  slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction='left' onClick={()=> handClick('left')}>
        <BsArrowLeftShort/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((slide)=>(
            <Slide key ={slide.id}>
              <ImgContainer>
                <Img src={slide.img}></Img>
              </ImgContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Desc>{slide.desc}</Desc>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
        ))}
      </Wrapper>
      <Arrow  direction='right'  onClick={()=> handClick('right')}>
        <BsArrowRightShort/>
        </Arrow>
    </Container>
  )
}

export default Slider
