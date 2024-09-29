'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';


const { TextArea } = Input;

const PatientForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    // Get form values
    const data = form.getFieldsValue();
    console.log(data);
    alert('Form submitted successfully');
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: '500px', margin: 'auto', padding: 25, borderRadius: 13 }}
      className="bg-white flex-row"
      layout="vertical"
    >
      <Form.Item
        // label="Patient Name"
        name="patientName"
        rules={[{ required: true, message: 'Please enter the patient name' }]}
      >
        <Input placeholder="Patient Name" className="bg-white" />
      </Form.Item>

      <Form.Item
        // label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        // label="Country"
        name="country"
        rules={[{ required: true, message: 'Please enter your country' }]}
      >
        <Input placeholder="Country" />
      </Form.Item>

      <Form.Item
        // label="City"
        name="city"
        rules={[{ required: true, message: 'Please enter your city' }]}
      >
        <Input placeholder="City" />
      </Form.Item>

      <Form.Item
        // label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input placeholder="Phone number" type="number" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <TextArea placeholder="Describe the current medical problem" rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-[100%]">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PatientForm;
