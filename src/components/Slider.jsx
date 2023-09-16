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
  left: ${(props) =>  props.direction ===  'left-btn' && '10px'};
  right: ${(props) =>  props.direction ===  'right-btn' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper =  styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide =  styled.div`
  width: 100vw;
  height: 100vh;
  display:  flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`


const ImgContainer =  styled.div`
  flex: 1;
  height: 100%;

`
const Img = styled.img`

  height: 80%;

`
// 타이틀 + 설명 + 버튼 
const InfoContainer =  styled.div`

  flex: 1;
  padding: 80px;
  z-index: 1;
`
const Title =  styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 40px 0px;
  font-size: 20px;
  font-weight: 400;
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
    if(direaction === 'left-btn'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else {
      setSlideIndex(slideIndex < 2 ?  slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction='left-btn'  onClink={()=> handClick('left')}>
        <BsArrowLeftShort/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((slide)=>(
  
            <Slide bg={slide.bg}>
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
      <Arrow  direction='right-btn'  onClink={()=> handClick('right')}>
        <BsArrowRightShort/>
        </Arrow>
    </Container>
  )
}

export default Slider
