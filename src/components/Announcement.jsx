import React from 'react'
import styled from 'styled-components'




const Container =  styled.div`
  
  height: 30px;
  background-color: #c0c0c0;
  color:  white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`
function Announcement() {
  return (
    <Container>
      Welcome to Coco Mall
    </Container>
  )
}

export default Announcement
