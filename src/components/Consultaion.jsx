import React from 'react';
import { NavLink } from 'react-router-dom';

const ConsultationSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font bold text-black sm:text-4xl md:text-5xl mb-4">
          Change Your Life
        </h2>
        
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl text-black">
            Find Your Inner Peace &
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Happiness
          </p>
        </div>
        
        <NavLink to="/appointment-form">
        <button className="bg-primary/60 hover:bg-primary/70 text-gray-900 py-3 px-8 rounded-full text-lg sm:text-xl transition duration-300 transform hover:scale-105  hover:shadow-2xl">
          Book Consultation
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ConsultationSection;