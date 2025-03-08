"use client";

import React, { useState } from 'react'

const Featuredcategory = () => {
    const [category,set_category]=useState([
        {
            id:1,
            category:"Portable WiFi Camera",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/portable-ip-camera-48x48.png",
        },
        {
            id:1,
            category:"Drone",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png",
        },
        {
            id:1,
            category:"Gimbal",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
        },
        {
            id:1,
            category:"Printer Paper",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-paper-48x48.png",
        },
        {
            id:1,
            category:"Laptop Accesories",
            image:"https://www.startech.com.bd/image/cache/catalog/brand-logo/laptop-acc-icon-48x48.png",
        },
        {
            id:1,
            category:"TV",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png",
        },
        {
            id:1,
            category:"Mobile Phone",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png",
        },
        {
            id:1,
            category:"Mobile Accesories",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-accessories-48x48.png",
        },
        {
            id:1,
            category:"Portable WiFi Camera",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/portable-ip-camera-48x48.png",
        },
        {
            id:1,
            category:"Drone",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png",
        },
        {
            id:1,
            category:"Gimbal",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png",
        },
        {
            id:1,
            category:"Printer Paper",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-paper-48x48.png",
        },
        {
            id:1,
            category:"Laptop Accesories",
            image:"https://www.startech.com.bd/image/cache/catalog/brand-logo/laptop-acc-icon-48x48.png",
        },
        {
            id:1,
            category:"TV",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png",
        },
        {
            id:1,
            category:"Mobile Phone",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png",
        },
        {
            id:1,
            category:"Mobile Accesories",
            image:"https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-accessories-48x48.png",
        },
    ])
  return (
    <section className='mx-auto w-full xl:max-w-[1300px] px-[15px] pb-[20px] lg:py-[30px] font-jost'>
        <div className='text-center'>
            <h2 className='text-[18px] xl:text-[25px] font-[600]'>Featured Category</h2>
            <p className='text-[14px] xl:text-[16px] mt-[4px]'>Get Your Desired Product from Featured Category!</p>
        </div>
        {/* --------------------all-category----------------- */}
        <section className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-[10px] lg:gap-[15px] mt-[30px] '>
            {
                category.map((data,i)=>{
                    return(
                        <div key={i} className='bg-white px-[8px] py-[10px] md:py-[15px] xl:p-[20px] text-center rounded-[10px] flex justify-center items-center flex-col'>
                               <img src={data.image} className='w-[28px] md:w-[32px] lg:m-auto' alt="" />
                               <p className='text-[13px] xl:text-[16px] font-[500] leading-[15px] mt-[10px] xl:leading-[25px]'>{data.category}</p>
                        </div>
                    )
                })
            }
        </section>
        {/* --------------------all-category----------------- */}
    </section>
  )
}

export default Featuredcategory
