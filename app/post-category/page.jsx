import React from 'react'
import Header from '../components/Header'
import Sportsblog from './components/Sportsblog'
import Blogmain from './components/Blogmain'
import Blogfooter from './components/Blogfooter'
import BreakingNews from './components/BreakingNews'
import Footer from '../components/Footer'

const page = () => {
  return (
    <section className=''>
        <Header/>
        <section className='mx-auto w-full font-oswald px-[15px] xl:max-w-[1300px] py-[20px] m-auto'>
            <BreakingNews/>
            <Blogmain/>
            <Blogfooter/>
        </section>
        <Footer/>

    </section>
  )
}

export default page
