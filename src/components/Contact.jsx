import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaGlobe, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const data = {
      name,
      email,
      phone,
      message,
    };
    console.log(data);
    if (!name || !email || !phone || !country || !message) {
      alert('Please fill in all fields');
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setMessage('');
  };

  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
          {/* Left Side: Features */}
          <div className='space-y-8'>
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-4xl font-bold font-secondary mb-4 text-white'
            >
              Make an appointment
            </motion.h2>
            <motion.div 
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'
            >
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaUserAlt className='text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-xl font-medium'>24 Hours Services</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaEnvelope className='text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-xl font-medium'>Expert Therapist</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaPhoneAlt className='text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-xl font-medium'>High Quality Core</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaGlobe className='text-primary' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-xl font-medium'>Trusted Clinic</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Side: Form */}
          <motion.div 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='space-y-8 p-8 bg-white shadow-xl rounded-md'
          >
            <h2 className='text-2xl font-bold mb-4'>Book Appointment</h2>
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  placeholder='Name'
                  value={name}
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  placeholder='Email'
                  value={email}
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'
                />
              </div>
              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type='tel'
                  placeholder='Contact Number'
                  value={phone}
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'
                />
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type='text'
                  placeholder='Country'
                  value={country}
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Message'
                value={message}
                className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'
                rows='5'
              ></textarea>
              <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-green-600'>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='bg-white p-8 rounded-md shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Thank You!</h2>
            <p>Thank you, {name}, for submitting your query!</p>
            <button 
              onClick={closeModal} 
              className='mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-green-600'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
