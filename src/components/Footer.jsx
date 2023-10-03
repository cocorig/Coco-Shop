import React from 'react'
import styled from 'styled-components'
import {AiFillInstagram , AiFillFacebook , AiFillTwitterSquare , AiFillPhone, AiFillMail} from 'react-icons/ai'
import {FaPinterestSquare, FaMapMarkerAlt}from 'react-icons/fa'


const Container = styled.footer`
  display: flex;
`
const Left =  styled.div`
  flex: 1;
  display: flex;
  flex-direction : column;
  padding: 20px;

`
const Logo = styled.h1`
 
`
const Desc = styled.p`
  margin-top: 10px;
`


const SocialContainer = styled.div`
  margin: 20px 0px;
  display: flex;
`
const SocialIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color:  #${props => props.color};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  & > svg {
  font-size: 25px;
}
`
  
const Center = styled.div`
    flex: 1;
    padding: 20px;

`
const Title =  styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
/* 두개의 열 */
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`


function Footer() {
  return (
    <Container>
      <Left>
          <Logo>COCO</Logo>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </Desc>
          <SocialContainer>
            <SocialIcon color='E4405F'>
              <AiFillInstagram/>
            </SocialIcon>
            <SocialIcon color='3B5999'>
              <AiFillFacebook />
            </SocialIcon>
            <SocialIcon  color='55ACEE'>
              <AiFillTwitterSquare/>
            </SocialIcon>
            <SocialIcon  color='E60023'> 
              <FaPinterestSquare/>
            </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
        <Title>Usful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contect</Title>
          <ContactItem><FaMapMarkerAlt/>South Korean ~~~</ContactItem>
          <ContactItem><AiFillPhone/>000000</ContactItem>
          <ContactItem><AiFillMail/>contact@coco.dev</ContactItem>
  
      </Right>
    </Container>
  )
}

export default Footer
