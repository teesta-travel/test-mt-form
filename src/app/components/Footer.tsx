import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#162537] p-24 pb-5">
      <div className="container mx-auto  px-36">

        <div className="flex flex-wrap">
          {/* About Section */}

          <div className="w-full md:w-1/3 md:mb-0  ">

          <div className='flex items-center'>
             <Image src="/logo.png" alt="logo" width={50} height={50} />
             <p className=' text-white m-0 ml-[0.5rem] font-bold text-[1.2rem]'>Teesta</p>
            </div>


            <p className=" text-[#d6d6d6] py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <ul className="text-white flex">
                <li className="p-2">
                <FaFacebookF />
                </li>
                <li className="p-2">
                <FaTwitter /> 
                </li>
                <li className="p-2"><FaInstagram />
                </li>
                <li className="p-2">
                <FaLinkedinIn />
                </li>
            </ul>

          </div>

          {/* Our Departments */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center justify-center p-4">
            <h3 className="text-lg font-semibold mb-4 text-center  text-white">Our Departments</h3>
  
             <div className="flex justify-center">
                <ul className="text-[#d6d6d6] mr-8">
                    <li className="p-2">Births</li>
                    <li className="p-2">Pulmonary</li>
                    <li className="p-2">Cardiology</li>
                    <li className="p-2">Neurology</li>
                    <li className="p-2">Traumatology</li>
                    <li className="p-2">Magnetic</li>
                 </ul>
                <ul className="text-[#d6d6d6]">
                    <li className="p-2">Dental</li>
                    <li className="p-2">Nuclear</li>
                    <li className="p-2">Pregnancy</li>
                    <li className="p-2">For Disabled</li>
                    <li className="p-2">X-ray</li>
                    <li className="p-2">Prostheses</li>
                </ul>
            </div>
        </div>



        {/* We’re Available */}
        <div className="w-full md:w-1/3 items-center flex-row">
            <h3 className="text-lg font-bold mb-4 text-white text-center">We’re Available</h3>

            <div className='flex justify-between p-2'>

            <div className='text-[#d6d6d6]'>
                <p>Monday - Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
            </div>
            <div className='text-[#d6d6d6]'>
                <p >8.00 - 18.00</p>
                <p >8.00 - 18.00</p>
                <p >8.00 - 13.00</p>
            </div>

            </div>

        </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-300 pt-4">
          <p className="text-sm text-white">
            Copyright ©2024 All rights reserved | 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
