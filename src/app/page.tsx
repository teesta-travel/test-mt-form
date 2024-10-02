'use client'
import React, { useState } from 'react';
import PatientForm from './components/PateientForm';
import 'antd/dist/reset.css'; 
import Navbar from './components/navbar';
import { Button } from 'antd';


const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleToggle = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <>
    <Navbar onToggle={handleToggle}/>

    {showForm && 
    <div className='fixed min-w-[50rem] top-1/4 left-1/4'>
      <Button onClick={handleToggle} className=' absolute ml-[750px]'>❌</Button>
      <PatientForm />
    </div>
    }

  <div className="" style={{
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
      <p className='text-xl'>
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
    </>
  );
};

export default Home;
