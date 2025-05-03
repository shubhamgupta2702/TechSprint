import React from 'react'
import {NavLink} from "react-router-dom";

import doc2 from '../assets/doc2.png'
import doc3 from '../assets/doc3.png'
import doc4 from '../assets/doc4.png'
import doc5 from '../assets/doc5.png'
import doc6 from '../assets/doc6.png'
import doc7 from '../assets/doc7.png'

const Appointment = () => {
  return (
    <>
    <div className='text-xl px-6 text-black mt-28'>
    Browse through the doctors:
    </div>
    <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
    <div className="text-sm text-gray-500 divide-y divide-gray-500/30 border border-gray-500/30 bg-white w-80 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center justify-between py-8">
            <img className="h-24 w-24 rounded-full" src={doc2} alt="userImage1"/>
            <h2 className="text-lg text-gray-800 mt-3">Dr. Sophia</h2>
            <p>Content Marketing</p>
            <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">Available</p>
        </div>
        <div className="flex items-center divide-x text-black">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3">
            <img width="18" height="14" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/>
            <NavLink to="/appointment-form">Book Appointment</NavLink>
                
            </button>
            
        </div>
    </div>

    <div className="text-sm text-gray-500 divide-y divide-gray-500/30 border border-gray-500/30 bg-white w-80 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center justify-between py-8">
            <img className="h-24 w-24 rounded-full" src={doc3} alt="userImage2"/>
            <h2 className="text-lg text-gray-800 mt-3">Dr. Richard Nelson</h2>
            <p>Content Writer</p>
            <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">Available</p>
        </div>
        <div className="flex items-center divide-x text-black">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3">
            <img width="18" height="14" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/>
                Book Appointment
            </button>
            
        </div>
    </div>

    <div className="text-sm text-gray-500 divide-y divide-gray-500/30 border border-gray-500/30 bg-white w-80 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center justify-between py-8">
            <img className="h-24 w-24 rounded-full" src={doc4}/>
            <h2 className="text-lg text-gray-800 mt-3">Dr. Donald Jackman</h2>
            <p>Content Creator</p>
            <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">Available</p>
        </div>
        <div className="flex items-center divide-x text-black">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3">
            <img width="18" height="14" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/>
                Book Appointment
            </button>
            
        </div>
    </div>
</div>

{/* 2nd Section  */}
<div className="mt-20 mb-24 flex flex-wrap items-center justify-center gap-6">
    <div className="text-sm text-gray-500 divide-y divide-gray-500/30 border border-gray-500/30 bg-white w-80 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center justify-between py-8">
            <img className="h-24 w-24 rounded-full" src={doc5} alt="userImage1"/>
            <h2 className="text-lg text-gray-800 mt-3">Dr. Grace</h2>
            <p>Content Marketing</p>
            <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">Available</p>
        </div>
        <div className="flex items-center divide-x text-black">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3">
            <img width="18" height="14" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/>
                Book Appointment
            </button>
            
        </div>
    </div>

    <div className="text-sm text-gray-500 divide-y divide-gray-500/30 border border-gray-500/30 bg-white w-80 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center justify-between py-8">
            <img className="h-24 w-24 rounded-full" src={doc7} alt="userImage2"/>
            <h2 className="text-lg text-gray-800 mt-3">Dr. William</h2>
            <p>Content Writer</p>
            <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">Available</p>
        </div>
        <div className="flex items-center divide-x text-black">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3">
            <img width="18" height="14" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/>
                Book Appointment
            </button>
            
        </div>
    </div>

    <div className="text-sm text-gray-500 divide-y divide-gray-500/30 border border-gray-500/30 bg-white w-80 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex flex-col items-center justify-between py-8">
            <img className="h-24 w-24 rounded-full" src={doc6} alt="userImage3"/>
            <h2 className="text-lg text-gray-800 mt-3">Dr. Alice</h2>
            <p>Content Creator</p>
            <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">Available</p>
        </div>
        <div className="flex items-center divide-x text-black">
            <button type="button" className="flex items-center justify-center gap-2 w-full py-3">
            <img width="18" height="14" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/>
                Book Appointment
            </button>
            
        </div>
    </div>
</div>
    </>
  )
}

export default Appointment;
