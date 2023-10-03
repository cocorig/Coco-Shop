//rfce
import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
;



function Home() {

  return (

    <div className='containner'>
      {/* <Announcement/> */}
      <Navbar/>
      <Slider/>
      <Announcement text='Categories'/>
      <Categories/>
      <Announcement text='Popular products for a month'/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home;
