import React from 'react'

const About = () => {
  return (
    <section className="py-[100px]">
        <div className="max-w-container mx-auto">
            <div className="text-center">
                <h3 className="font-bold text-[35px] font-open pb-[20px]">About Me</h3>
                <p className="font-normal font-open text-[18px] text-[#757575] w-[827px] mx-auto">I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
            </div>

            <div className="flex justify-center gap-[50px] pt-[30px]">
                <div className="text-center">
                    <p className="font-normal text-[#757575] text-[20px] font-open">Name</p>
                    <h3 className="font-bold font-open text-[20px]">Mary Hardy </h3>
                </div>

                <div className="text-center">
                    <p className="font-normal text-[#757575] text-[20px] font-open">Email</p>
                    <h3 className="font-bold font-open text-[20px]">info@gmail.com</h3>
                </div>

                <div className="text-center">
                    <p className="font-normal text-[#757575] text-[20px] font-open">Date of birth:</p>
                    <h3 className="font-bold font-open text-[20px]">11 November 1987</h3>
                </div>

                <div className="text-center">
                    <p className="font-normal text-[#757575] text-[20px] font-open">From:</p>
                    <h3 className="font-bold font-open text-[20px]">Los Angeles, USA</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About