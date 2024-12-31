import React from 'react'
import js from "../../assets/js.png"
import react from "../../assets/react.svg"
import nodeJs from "../../assets/node js.png"
import mongo from "../../assets/mongoDb.png"
import Slider from 'react-slick'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute bottom-[50%] right-0 cursor-pointer' onClick={onClick}> <FaArrowRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute z-[1] top-[50%] cursor-pointer' onClick={onClick}> <FaArrowLeft/></div>
    );
  }
  

const Skill = () => {
    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <section className="py-[120px] px-[10px] md:pb-0">
            <div className="max-w-container mx-auto">
                <div className="text-center pb-[50px]">
                    <h3 className='font-bold text-[35px] font-open pb-[20px]'>What I do</h3>
                    <p className="font-normal text-[18px] md:text-[17px] text-[#757575] lg:w-[909px] md:w-[100%] mx-auto">I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                </div>

                <Slider {...settings}>
                    <div className="w-[24%] py-[40px] pl-[40px]">
                        <img src={js} alt="" />
                        <h3 className='font-bold font-open text-[20px] py-[20px]'>Vanilla JavaScript</h3>
                        <p className='font-normal text-[16px] font-open text-[#757575]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>

                    <div className="w-[24%] py-[40px] pl-[40px]">
                        <img src={react} alt="" />
                        <h3 className="font-bold font-open text-[20px] py-[25px]">React</h3>
                        <p className="font-normal text-[16px] font-open text-[#757575]">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>

                    <div className="w-[24%] py-[40px] pl-[40px]">
                        <img src={nodeJs} alt="" />
                        <h3 className="font-bold font-open text-[20px] py-[20px]">Node.js</h3>
                        <p className="font-normal text-[16px] font-open text-[#757575]">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>

                    <div className="w-[24%] py-[40px] pl-[40px]">
                        <img src={mongo} alt="" />
                        <h3 className="font-bold font-open text-[20px] py-[20px]">MongoDB</h3>
                        <p className="font-normal text-[16px] font-open text-[#757575]">List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Skill