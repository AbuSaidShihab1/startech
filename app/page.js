import React from 'react'
import Header from "./components/Header"
import Hero from "./components/home/Hero"
import Servicescards from "./components/home/ServiceCards"
import Featuredcategory from "./components/home/Featuredcategory"
import ProductComparison from "./components/home/ProductComparison"
import StoreBanner from "./components/home/StoreBanner"
import FeaturedProduct from "./components/home/FeaturedProduct"
import Policy from "./components/home/Policy"
import Footer from "./components/Footer"
const page = () => {
  return (
   <section className='bg-theme_color2 font-jost overflow-x-hidden'>
       <Header/>
       <Hero/>
       <Servicescards/>
       <Featuredcategory/>
       <StoreBanner/>
       <ProductComparison/>
       <FeaturedProduct/>
       <Policy/>
       <Footer/>
   </section>
  )
}

export default page
