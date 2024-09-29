import React from 'react';
import PatientForm from './components/PateientForm';
import 'antd/dist/reset.css'; 

const Home: React.FC = () => {
  return (
    <div className=' flex-row'>
      <div className='justify-center flex my-2'>
      <p className=' text-black'>Patient Information Form</p>
      </div>
      <PatientForm />
    </div>
  );
};

export default Home;
