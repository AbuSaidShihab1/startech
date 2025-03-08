import React from 'react'
import Blogleftside from './Blogleftside'
import Blogrigthside from './Blogrigthside'

const Blogmain = () => {
  return (
    <section className='w-full flex justify-center lg:flex-row flex-col gap-[10px]'>
        <Blogleftside/>
        <Blogrigthside/>
    </section>
  )
}

export default Blogmain
