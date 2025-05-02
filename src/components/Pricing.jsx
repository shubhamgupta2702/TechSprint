import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../utilis/animationVariants';
const packages = [
  {
    name: 'Current Plan',
    price: 'FREE',
    description: 'Ideal for individuals or small businesses looking to get started with mental wellness.',
    features: [
      'Limited Journal Entries',
      'Access to a few games',
      'mood tracking (weekly log)',
      'read 5 articles per month',
      'Access to one basic sound for relaxation',
    ],
  },
  {
    name: 'Premium Plan',
    price: 'Rs 499/-',
    description: 'A great choice for growing businesses with additional features and support for mental wellness.',
    features: [
      'Unlimited Journals',
      'All puzzle games unlocked',
      'Advance mood tracker (daily update)',
      'read unlimited articles',
      'Access to premium sound for relaxation',
    ],
  },
  {
    name: 'Premium Plus Plan',
    price: 'Rs 999/-',
    description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
    features: [
      'Weekly live group therapy/ meditation sessions',
      'personalised mental health roadmap',
      'Priority support from mental wellness experts',
      'Private notes section',
    ],
  },
];

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='bg-[#f7f8fc] pt-32' id='pricing'>
      <div className='container mx-auto px-8'>
        <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-3'>Perfect for Small & Large Brands</h2>
          <p className='text-lg mb-12 md:w-3/5 mx-auto'>
            Explore our mental wellness packages designed to support individuals and businesses in fostering a healthier mindset.
          </p>
        </motion.div>
        
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8'>
          {packages.map((pkg, index) => (
            <motion.div 
            variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
            key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
              <hr className='w-24 border text-primary border-primary'/>
              <p className='text-3xl font-bold mb-4'>
                
                {pkg.price}<span className='text-lg font-normal'>/mo</span>
              </p>
              <p className='text-lg mb-4'>{pkg.description}</p>
              <ul className='list-disc list-inside space-y-2 mb-6'>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={handleScrollToContact}
                className='bg-primary text-white px-4 py-2 rounded'
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
