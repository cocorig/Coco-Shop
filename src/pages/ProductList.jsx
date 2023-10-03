import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'


const Container = styled.div`
  
`
const Title  = styled.h1`
  margin: 20px;`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`
const Option = styled.option`
  
`
function ProductList() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Ring</Title>
      {/* 필터기능 추가 */}
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>Silver</Option>
            <Option>Rose Gold</Option>
            <Option>Gold</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>Price</Option>
            <Option>~ 50000원</Option>
            <Option>50000원 ~ 100,000원</Option>
            <Option>100,000원 ~ 200,000원</Option>
            <Option>200,000원 ~ 300,000원</Option>
            <Option>300,000원 ~</Option>
          </Select>
          </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (dasc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/*  */}
      <Products/>
      <Footer/>
    </Container>
  )
}

export default ProductList
