import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Contact = () => {
    return (
        <section className="py-[120px] bg-[#FFF8F3]">
            <div className="max-w-container mx-auto flex justify-between">
                <div className="w-[48%]">
                    <h3 className="font-bold text-[35px] font-open">Lets Connect</h3>
                    <p className="font-normal text-[16px] text-[#474747] pt-[20px]">Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                    <div className="text-[#FD6E0A] flex gap-[20px] pt-[32px]">
                        <FaFacebookF />
                        <FaTwitter />
                        <AiFillInstagram />
                    </div>
                </div>
                <div className="w-[40%]">
                    <h3 className="font-bold text-[35px] font-open">Let’s Message me</h3>
                    <div className="flex flex-col pt-[30px]">
                        <input className='border-[1px] border-[gray] py-[18px] outline-none border-1 text-[18px] font-normal font-open pl-[30px] rounded-[5px] text-[#fff] focus:bg-[#112e42] transition duration-700 ease-in-out' placeholder='Your Name' type="text"/>
                        <input className='border-[1px] border-[gray] py-[18px] outline-none border-1 text-[18px] font-normal font-open pl-[30px] rounded-[5px] mt-[24px] text-[#fff] focus:bg-[#112e42] transition duration-700 ease-in-out' placeholder='Email' type="email"/>
                        <textarea name="" id="" placeholder='Massege' className='resize-none outline-none border-[1px] border-[gray] mt-[24px] h-[200px] pl-[30px] pt-[10px] focus:bg-[#112e42] transition duration-700 ease-in-out rounded-[5px]'></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact