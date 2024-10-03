import React from 'react'
import CommonHead from '../Common/CommonHead'
// import './Banner.css'
import CommonButton from '../Common/CommonButton'
import CommonCount from '../Common/CommonCount'
import { IoMdStar } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

const Banner = () => {
  return (
    <>
        <section className = 'banner pt-[97px] pl-[30px] pr-[30px] lg:px-[0 px]'>
            <div className="container">
                <div className="banner_row flex flex-wrap lg:flex  gap-[72px] items-center justify-center ">
                    <div className="banner_image">
                        <img src = 'images/banner.png'></img>
                    </div>
                    <div className="banner_text">
                        <CommonHead CommonHeadText={'Normal Oily Skin'}/>
                        <h1 className=' lg:px-[0px] w-[300px] lg:w-[540px] mt-[20px] text-[50px] lg:text-[72px] font-normal font-ptSerif text-secondColor'>Men’s Sunscreen
                        hand & body</h1>
                        <p className = 'w-[300px] lg:w-[526px] mt-[20px] mb-5 lg:mb-[64px] text-[18px] lg:text-lg text-[#A0A79A] font-normal font-inter'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's
                        </p>
                        <CommonButton CommonButtonText={'Add to Cart'} CommonButtonEffect={'hover:bg-black hover:text-red-800'}/>
                        <div className='flex flex-wrap gap-[20px] lg:flex gap-[49px]'>
                            <CommonCount countNumber = {4} countIcon = { <IoMdStar /> } countText={'Rating'}/>
                            <CommonCount countNumber = {200} countIcon = { <MdShoppingBag /> } countText={'Product Solds'}/>
                            <CommonCount countNumber = {400} countIcon = { <FaSmile /> } countText={'Review'}/>

                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
      
    </>
  )
}

export default Banner
