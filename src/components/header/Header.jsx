import React, { useState } from 'react'
import logo from "../../assets/Mary.png"
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import './script.js'
import './header.css'

const Header = () => {
    let [show, setShow] = useState(false)
    // let handleMenu = ()=> {

    // }

    return (
        <section className='lg:py-[25px] py-[15px] fixed w-full z-50 nav'>
            <div className="max-w-container mx-auto">
                <div className="flex w-full">
                    <div className="w-1/2 lg:pl-0 pl-[10px]">
                        <img src={logo} alt="" />
                    </div>

                    <div className="w-1/2 leading-[40px]">
                        <ul className={`duration-700 ease-in-out  lg:static lg:flex justify-end gap-[43px] lg:bg-transparent lg:h-0 h-[100vh] pl-[10px] pt-[5px] lg:p-0 w-[45%] lg:w-full ${show == true ? 'bg-slate-700 absolute top-0 right-0 text-[#fff]' : 'absolute top-0 right-[-1000px]'}`}>
                            <li>
                                <a className='font-semibold text-[20px] font-open text-[#FD6E0A]' href="#">Portfolio</a>
                            </li>

                            <li className='py-[5px] lg:py-0'>
                                <a className='font-semibold text-[20px] font-open text-[#FD6E0A]' href="#"><a href="#">Blog</a></a>
                            </li>

                            <li className='pt-[15px] lg:py-0'>
                                <a className='lg:font-semibold lg:text-[20px] lg:py-[16px] py-[10px] lg:px-[33px] px-[20px] bg-[#FD6E0A] rounded text-white font-open' href="#"><a href="#">Hire Me</a></a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden z-10 cursor-pointer mt-[15px] lg:p-0 pr-[20px]" onClick={() => setShow(!show)}>
                        {show == true ? <RxCross1 /> : <FiMenu />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header