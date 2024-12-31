import React from 'react'
import { FaDownload } from "react-icons/fa6";


const Summary = () => {
    return (
        <section className="py-[120px]">
            <div className="max-w-container mx-auto">
                <div className="">
                    <h3 className="font-bold font-open text-[35px] text-center">A summary of My Resume</h3>
                </div>
                <div className="lg:flex justify-between py-[113px]">
                    <div className="w-[48%] mx-auto">
                        <div className="">
                            <h2 className="font-bold font-open text-[30px] text-[#474747] pb-[30px]">My Education</h2>
                            <h3 className="font-bold font-open text-[25px] text-[#474747]">Master in Computer Engineering</h3>
                            <span className="font-semibold font-open text-[20px] md:text-[16px] text-[#757575]">Harvard University / 2015 - 2017</span>
                            <p className="font-normal font-open text-[16px] text-[#757575] pt-[20px]">List skill/technologies here. You can change the icon above
                                to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>

                        <div className="pt-[60px]">
                            <h2 className="font-bold font-open text-[30px] text-[#474747] pb-[30px]">Master in Computer Engineering</h2>
                            <h3 className="font-bold font-open text-[25px] text-[#474747]">Harvard University / 2015 - 2017</h3>
                            <span className="font-semibold font-open text-[20px] md:text-[16px] text-[#757575]">Harvard University / 2015 - 2017</span>
                            <p className="font-normal font-open text-[16px] text-[#757575] pt-[20px]">List skill/technologies here. You can change the icon above
                                to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>

                        <div className="pt-[60px]">
                            <h2 className="font-bold font-open text-[30px] text-[#474747] pb-[30px]">My Education</h2>
                            <h3 className="font-bold font-open text-[25px] text-[#474747]">Master in Computer Engineering</h3>
                            <span className="font-semibold font-open text-[20px] md:text-[16px] text-[#757575]">Harvard University / 2015 - 2017</span>
                            <p className="font-normal font-open text-[16px] text-[#757575] pt-[20px]">List skill/technologies here. You can change the icon above
                                to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>

                    <div className="w-[48%] mx-auto">
                        <div className="">
                            <h2 className="font-bold font-open text-[30px] text-[#474747] pb-[30px]">My Experience</h2>
                            <h3 className="font-bold font-open text-[25px] text-[#474747]">Sr. Font End Developer</h3>
                            <span className="font-semibold font-open text-[20px] md:text-[16px] text-[#757575]">Apple Inc / 2020 - Current</span>
                            <p className="font-normal font-open text-[16px] text-[#757575] pt-[20px]">List skill/technologies here. You can change the icon above
                                to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>

                        <div className="pt-[60px]">
                            <h2 className="font-bold font-open text-[30px] text-[#474747] pb-[30px]">Jr. Font End Developer</h2>
                            <h3 className="font-bold font-open text-[25px] text-[#474747]">Sr. Font End Developer</h3>
                            <span className="font-semibold font-open text-[20px] md:text-[16px] text-[#757575]">Apple Inc / 2020 - Current</span>
                            <p className="font-normal font-open text-[16px] text-[#757575] pt-[20px]">List skill/technologies here. You can change the icon above
                                to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>

                        <div className="pt-[60px]">
                            <h2 className="font-bold font-open text-[30px] text-[#474747] pb-[30px]">HTML Developer</h2>
                            <h3 className="font-bold font-open text-[25px] text-[#474747]">Sr. Font End Developer</h3>
                            <span className="font-semibold font-open text-[20px] md:text-[16px] text-[#757575]">Apple Inc / 2020 - Current</span>
                            <p className="font-normal font-open text-[16px] text-[#757575] pt-[20px]">List skill/technologies here. You can change the icon above
                                to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <a href="#" className='mx-auto flex justify-center items-center gap-[10px] bg-[#FD6E0A] w-[200px] py-[19px] text-[#fff] font-bold text-[20px] rounded-[5px]'><FaDownload/> Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default Summary