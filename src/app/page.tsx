'use client'
import React, { useState } from 'react';
import PatientForm from './components/PateientForm';
import 'antd/dist/reset.css'; 
import Navbar from './components/navbar';
import { Button } from 'antd';
import Footer from './components/Footer';

import { PiToothThin } from "react-icons/pi";
import { LuHeartPulse } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";
import { GiKneeCap } from "react-icons/gi";
import { BsLungs } from "react-icons/bs";
import { GiNoseFront } from "react-icons/gi";
import { PiBoneLight } from "react-icons/pi";
import { GiKidneys } from "react-icons/gi";



const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleToggle = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <>
    <Navbar onToggle={handleToggle} />
    {showForm && 
    <div className='fixed min-w-[40rem] top-[7rem] left-1/3'>
      <PatientForm onToggle={handleToggle} />
    </div>
    }

  <div style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    }}>
    <div className='flex flex-col h-[50vh] w-[50vw] p-4'>

      <div>
        <p className='text-2xl'>
        THE BEST MEDICAL CENTER
        </p>
      </div>

      <div className='flex flex-col justify-between mt-4'>
        <p className='text-7xl font-extrabold m-1'>
          Bringing health
        </p>
        <p className='text-6xl font-thin m-1'> 
          to life for the whole family
        </p>
      </div>

      <div className='mt-6'>
        <Button color="default" ghost className='p-7 text-xl'>
          DISCOVER MORE
        </Button>
      </div>
    </div>
  </div>

  {/* Departmenets Section */}

  <div className='p-[15vw]'>

    <div className=''>
      <p className='text-black text-5xl  font-semibold '>
        Departments
      </p>
    <div className='flex justify-between items-center '>
      <p className=' text-slate-500 max-w-[30vw] font-light text-base'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, maxime magni laudantium aperiam 
      </p>
      <Button type='default'
        className='p-7 !text-blue-400 !border !border-sky-400 hover:!text-white hover:!bg-blue-500 font-semibold rounded-none '
        >
        Learn More
      </Button>

    </div>
    
  <div className='flex flex-wrap gap-10 justify-between my-12'>

  {[
    { icon: <PiBoneLight size={60} color='#409fff' />, title: 'Bone Marrow' },
    { icon: <LuHeartPulse size={60} color='#409fff' />, title: 'Neurosurgery' },
    { icon: <GiKidneys size={60} color='#409fff' />, title: 'Kidney Transplant' },
    { icon: <GiKneeCap size={60} color='#409fff' />, title: 'Weight Loss' },
    { icon: <BsLungs size={60} color='#409fff' />, title: 'Spine Surgery' },
    { icon: <GiNoseFront size={60} color='#409fff' />, title: 'IVF' },
    { icon: <PiToothThin size={60} color='#409fff' />, title: 'Liver Transplant' },
    { icon: <LuHeartPulse size={60} color='#409fff' />, title: 'Cosmetics' },
    { icon: <GiBrain size={60} color='#409fff' />, title: 'Gynecology' },
    { icon: <GiKneeCap size={60} color='#409fff' />, title: 'Orthopedics' },
    { icon: <BsLungs size={60} color='#409fff' />, title: 'Cardiology' },
    { icon: <GiNoseFront size={60} color='#409fff' />, title: 'Oncology' }
  ].map((item, index) => (
    <div 
      key={index} 
      className='h-[9rem] w-[10rem] bg-white flex flex-col justify-around items-center shadow-md hover:shadow-lg transition-shadow 
       border-sky-300
      '
      style={{ borderWidth: '0.5px' }}
    >

      {item.icon}
      <div>
      <p className='text-sky-800 font-bold text-center'>{item.title}</p>
      </div>
    </div>
  ))}


  
    </div>
    </div>


    {/* { Prices Section} */}

    <div className='flex flex-col justify-center items-center mt-[15rem]'>
  <div className="text-center">
    <span className='text-black text-[3rem] font-bold'>Lowest Quotes Guaranteed</span>
  </div>
  <div className="text-center mt-4">
    <span className='text-black text-lg'>
      While maintaining treatment quality, we are always negotiating better costs and alternatives. Our prices are continually lower.
    </span>
  </div>

  <div className='flex flex-wrap gap-10 justify-between my-12'>

    {[
      { icon: <LuHeartPulse size={30} color='black' />, title: 'Heart Bypass Surgery', price: '$4500' },
      { icon: <GiBrain size={30} color='black' />, title: 'Brain Tumor', price: '$5000' },
      { icon: <GiBrain size={30} color='black' />, title: 'Breast Implant', price: '$2750' },
      { icon: <GiBrain size={30} color='black' />, title: 'Hip Replacement', price: '$5550' },
      { icon: <GiKneeCap size={30} color='black' />, title: 'Knee Replacement', price: '$2750' },
      { icon: <GiBrain size={30} color='black' />, title: 'Valve Replacement', price: '$9500' },
      { icon: <BsLungs size={30} color='black' />, title: 'Lung Cancer', price: '$5500' },
      { icon: <GiBrain size={30} color='black' />, title: 'Cervical Cancer', price: '$4500' },
      { icon: <GiNoseFront size={30} color='black' />, title: 'Rhinoplasty', price: '$1800' },
      { icon: <GiBrain size={30} color='black' />, title: 'Breast Cancer', price: '$5000' },
      { icon: <GiBrain size={30} color='black' />, title: 'Hysterectomy', price: '$3000' },
      { icon: <GiBrain size={30} color='black' />, title: 'Hair Transplant', price: '$1400' }
    ].map((item, index) => (
      <div
        key={index}
        className='flex items-center bg-white p-5 w-[15rem]'
        style={{
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07)'
        }}
      >
        {item.icon}
        <div className="flex-1 justify-start flex flex-col mx-5">
          <p className="text-black font-bold">{item.title}</p>
          <p className="text-black">Starting At {item.price}</p>
        </div>
      </div>
    ))}
    
  </div>
</div>


  </div>




  <Footer />
    </>
  );
};

export default Home;



