import React from 'react'
import logo from "../../assets/Mary.png"

const Header = () => {
    return (
        <section className='py-[30px] fixed w-full z-50'>
            <div className="max-w-container mx-auto flex">
                <div className="w-1/2">
                    <img src={logo} alt="" />
                </div>

                <div className="w-1/2">
                    <ul className='flex justify-end gap-[43px]'>
                        <li>
                            <a className='font-semibold text-[20px] font-open' href="#">Portfolio</a>
                        </li>

                        <li>
                            <a className='font-semibold text-[20px] font-open' href="#"><a href="#">Blog</a></a>
                        </li>

                        <li>
                            <a className='font-semibold text-[20px] py-[16px] px-[33px] bg-[#FD6E0A] rounded text-white font-open' href="#"><a href="#">Hire Me</a></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header