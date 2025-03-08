import React from 'react'
import Blogleftside from './Blogleftside'
import Blogrigthside from './Blogrigthside'

const Blogmain = () => {
  return (
    <section className='flex lg:flex-row flex-col w-full justify-center gap-[10px]'>
        <Blogleftside/>
        <Blogrigthside/>
    </section>
  )
}

export default Blogmain
