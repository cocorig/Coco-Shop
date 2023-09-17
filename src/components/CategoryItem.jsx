import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Img =  styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info =  styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

  
const Title = styled.h2`
  font-weight: 400;
  color: white;
  margin-bottom: 20px;
`
const Button =  styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #878686;
  cursor: pointer;
  font-weight: 300;
`
function CategoryItem({category}) {
  return (
    <Container>
      <Img src={category.img}/>
      <Info>
        <Title>{category.title}</Title>
        <Button>SHOW NOW</Button>
      </Info>
    </Container>
    )

  
}

export default CategoryItem
