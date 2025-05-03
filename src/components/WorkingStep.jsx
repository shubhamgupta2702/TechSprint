import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center bg-working-img py-12'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-90'></div>
      <div className='relative container mx-auto px-8 py-20'>
        {/* Animated Title and Description */}
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
          className='text-center text-white mb-20'
        >
          <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
          <p className='text-lg md:w-1/2 mx-auto'>
          Booking a consultation is just a click away. Get expert help instantly through our easy-to-use website platform.
          </p>
        </motion.div>
        
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          {/* Animated Step 1 */}
          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              1
            </div>
            <h3 className='text-lg font-medium mt-8'>Doctor Selection</h3>
            <p className='my-2'>
              Step 1: Select any of the Doctor of your choice and book an instant consultation
            </p>
          </motion.div>
          
          {/* Animated Step 2 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              2
            </div>
            <h3 className='text-lg font-medium mt-8'>Appointment Scheduling</h3>
            <p className='my-2'>
              Step 2: Select a time of consultation at your convenience
            </p>
          </motion.div>
          
          {/* Animated Step 3 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              3
            </div>
            <h3 className='text-lg font-medium mt-8'>Confirmation</h3>
            <p className='my-2'>
              Step 3: You will recieve confirmation of the scheduled consultation
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
