import React from 'react'
import styled from 'styled-components'




const Container =  styled.div`

  height: 70px;
  color:  #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #f3f0f0;

`
function Announcement({text}) {
  return (
    <Container>
      {text}
    </Container>
  )
}

export default Announcement
