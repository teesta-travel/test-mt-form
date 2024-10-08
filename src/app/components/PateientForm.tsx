'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';
import { VscSend } from "react-icons/vsc";
import db from '../FirebaseConfig.js';
import { collection,addDoc } from 'firebase/firestore';


const { TextArea } = Input;
interface PatientFormProps {
  onToggle: () => void;  
}

const PatientForm: React.FC<PatientFormProps>= ( {onToggle}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const data = form.getFieldsValue();
    // console.log(data);
    try {
      await addDoc(collection(db, "appointments"), data);
      console.log('Data added successfully!');
      onToggle();
      form.resetFields();
    } catch (error) 
    {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='flex-row bg-white  justify-center py-6 rounded-xl'>
      <div className=' ml-[34rem]'>
      <Button onClick={onToggle} className=' margin-auto'>❌</Button>
      </div>
      <div className='my-3'>
        <p className='text-[2.5rem] text-black text-center m-0'   >
          Book an
        </p>
        <p className="text-[2.4rem] font-semibold text-black text-center m-0">
          Appointment
        </p>
      </div>
    <Form
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: '500px', margin: 'auto', borderRadius: 13 }}
      className="bg-white flex-row"
      layout="vertical"
    >
      <Form.Item
        // label="Patient Name"
        name="patientName"
        rules={[{ required: true, message: 'Please enter the patient name' }]}
      >
        <Input placeholder="Patient Name" className=" text-[1.1rem] p-3" />
      </Form.Item>

      <Form.Item
        // label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input placeholder="Enter email" className=" text-[1.1rem] p-3" />
      </Form.Item>

      <Form.Item
        // label="Country"
        name="country"
        rules={[{ required: true, message: 'Please enter your country' }]}
      >
        <Input placeholder="Country"  className=" text-[1.1rem] p-3"/>
      </Form.Item>

      <Form.Item
        // label="City"
        name="city"
        rules={[{ required: true, message: 'Please enter your city' }]}
      >
        <Input placeholder="City" className=" text-[1.1rem] p-3"/>
      </Form.Item>

      <Form.Item
        // label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input placeholder="Phone number" type="number"  className="bg-white text-[1.1rem] p-3"/>
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <TextArea placeholder="Describe the current medical problem" rows={4} className='text-[1.1rem]' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-[100%] text-[1.1rem] p-5 font-bold">
          Submit
        <VscSend size={20} color='white'/>
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default PatientForm;
