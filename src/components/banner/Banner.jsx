import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import bannerBg from "../../assets/bannerBg.png"
import banMan from "../../assets/banMan.png"

const Banner = () => {
  return (
    <section className='pt-[200px] pb-[200px] relative'>
        <div className="max-w-container mx-auto flex">
            <div className="w-1/2">
                <h2 className='text-[45px] font-semibold font-open'>Hi, I  am</h2>
                <h3 className='text-7xl font-bold pb-[20px] font-open'>Mary Hardy</h3>
                <p className='font-normal text-[18px] font-sans pb-[30px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                <div className="flex font-open">
                    <a className='flex gap-1 items-center font-semibold text-[20px] py-[19px] px-[17px] bg-[#FD6E0A] text-white rounded-[5px] mr-[25px]' href="#"><MdOutlineFileDownload/> Download CV</a>
                    <a className='flex gap-1 items-center font-semibold text-[20px] border-[1px] border-[#FD6E0A] py-[19px] px-[25px] rounded-[5px] text-[#fff] z-[3] after:duration-300 after:ease-in-out bg-[#FD6E0A]' href="#"><IoCallOutline/>Contact</a>
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