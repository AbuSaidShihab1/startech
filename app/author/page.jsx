import React from 'react'
import ProfileCard from './components/Authorright/ProfileCard'
import Header from '../components/Header'
import Authormiddle from './components/Authormiddle/Authormiddle'
import Footer from '../components/Footer'
import Blogfooter from '../blogs/components/Blogfooter'

const page = () => {
  return (
   <section className=''>
    <Header/>
    <section className='flex font-oswald justify-center lg:flex-row flex-col gap-[20px] xl:gap-[40px] mx-auto w-full px-[20px] xl:max-w-[1300px] py-[20px]'>
       <ProfileCard/>
       <Authormiddle/>
    </section>
    <div className='mb-[10px]'>
    <Blogfooter/>

    </div>
    <Footer/>
   </section>
  )
}

export default page
