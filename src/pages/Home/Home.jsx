import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'
import Products from './Products'
import Collection from './Collection'
import BestSeller from './BestSeller'
import Client from './Client'
import Newsletter from './NewsLetter'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Catagory/>
        <Products/>
        <Collection/>
        <BestSeller />
        <Client/>
{/*         <Newsletter/> */}
        <Footer/>
    </div>
  )
}

export default Home
