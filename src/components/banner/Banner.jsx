import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import bannerBg from "../../assets/bannerBg.png"
import banMan from "../../assets/banMan.png"

const Banner = () => {
  return (
    <section className='lg:pt-[200px] pt-[100px] md:pt-[140px] lg:pb-[200px] pb-[500px] md:pb-[770px] relative'>
        <div className="max-w-container mx-auto lg:flex">
            <div className="lg:w-1/2 lg:pl-0 px-[10px] md:px-[10px]">
                <h2 className='lg:text-[45px] md:text-[35px] text-[30px] font-semibold font-open leading-[35px] lg:leading-[70px]'>Hi, I  am</h2>
                <h3 className='lg:text-7xl md:text-[66px] text-[56px] font-bold pb-[20px] font-open'>Mary Hardy</h3>
                <p className='font-normal text-[18px] font-sans pb-[30px] md:w-[670px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                <div className="flex font-open md:pt-[20px]">
                    <a className='flex gap-1 items-center font-semibold lg:text-[20px] lg:py-[19px] md:py-[19px] px-[17px] py-[13px] bg-[#FD6E0A] text-white rounded-[5px] mr-[25px]' href="#"><MdOutlineFileDownload/> Download CV</a>
                    <a className='flex gap-1 items-center font-semibold lg:text-[20px] border-[1px] border-[#FD6E0A] lg:py-[19px] px-[25px] rounded-[5px] text-[#fff] after:duration-300 after:ease-in-out bg-[#FD6E0A]' href="#"><IoCallOutline/>Contact</a>
                </div>
            </div>
            <div className="w-1/2 overflow-hidden">
              <div className="absolute bottom-0 right-0">
                <img src={bannerBg} alt="" />
              </div>
              <div className="absolute bottom-0 right-0">
                <img src={banMan} alt="" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Banner