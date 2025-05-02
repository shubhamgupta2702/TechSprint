import React from "react";
import {NavLink} from "react-router-dom";
import {motion} from 'framer-motion'
import {fadeIn} from '../utilis/animationVariants';
import Antistresstherepy from "../assets/antistress.png";
import ChildrenTherepy from "../assets/ChildrenTherepy.png"
import Couplestheraoy from "../assets/Couplestheraoy.png"
import depressiontherapy from "../assets/depressiontherapy.png"
import postdivorcetherepy from "../assets/postdivorcetherepy.png"
import onlinetherepy from "../assets/onlinetherepy.png"

const HSServices = () => {
  return (
    <>
  
      <div className="flex flex-col items-center text-center pb-6 pt-28 bg-[#f7f8fc]">
        <motion.div 
                      variants={fadeIn("down", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="text-3xl md:text-5xl font-semibold mb-4 text-gray-800">
        <h1>
          Available Healthcare Services
        </h1>
        </motion.div>

        <motion.div 
                      variants={fadeIn("down", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      >
        <p className="w-full mb-14 text-gray-500 text-lg text-center justify-center items-center">
          Find the best support for your mental wellbeing.
        </p>
        </motion.div>



        
        
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <NavLink to="games-category">
          <div className="group flex flex-col items-center py-8 text-sm bg-[#f7f8fc] border border-gray-300 w-96 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="w-74 h-auto rounded-full"
              src={depressiontherapy}
              alt="userImage1"
            />
            <h2
              className="text-gray-700 text-xl font-extrabold mt-7"
            >
              Games
            </h2>
            <p
              className="text-gray-500/80 text-base leading-8 mt-5"
            >
              Play calming games like memory match and bubble pop to reduce stress and improve focus.
            </p>
           
          </div>
          </NavLink>


<NavLink to="blog">
          <div
            className="group flex flex-col items-center py-8 text-sm bg-[#f7f8fc] border border-gray-300 w-96 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="w-74 h-auto rounded-full"
              src={onlinetherepy}
              alt="userImage2"
            />
            <h2
              className="text-gray-700 text-xl  mt-7 font-extrabold"
            >
              Mindful Content
            </h2>
            <p
              className="text-gray-500/80 text-base leading-8 mt-5"
            >
              Breathe, reflect, and stay grounded with quick, daily mindfulness tips and exercises.
            </p>
            
          </div>
          </NavLink>

          <NavLink to="yogacards"
            className="group flex flex-col items-center py-8 px-2 text-sm bg-[#f7f8fc] border border-gray-300 w-96 rounded-md cursor-pointer hover:border-white hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="w-74 h-auto rounded-full"
              src={Couplestheraoy}
              alt="userImage3"
            />
            <h2
              className="text-gray-700 text-xl font-extrabold mt-7"
            >
              Yoga
            </h2>
            <p
              className="text-gray-500/80 text-base leading-8 mt-5"
            >
              Follow short, guided yoga routines for relaxation, anxiety relief, and better sleep.
            </p>
            
          </NavLink>
        </div>

      
        <div className="flex flex-wrap gap-6 pt-6 items-center justify-center">
          <NavLink to="music">
          <div
            className="group flex flex-col items-center py-8 text-sm bg-[#f7f8fc] border border-gray-300 w-96 rounded-md cursor-pointer hover:border-white

 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="w-74 h-auto rounded-full"
              src={Antistresstherepy}
              alt="userImage1"
            />
            <h2
              className="text-gray-700 text-xl font-extrabold mt-7 "
            >
              Music
            </h2>
            <p
              className="text-gray-500/80 text-base leading-8 mt-5"
            >
              Listen to soothing music and nature sounds to relax, focus, or unwind.
            </p>
            
          </div>
          </NavLink>

          <NavLink to="journals">
          <div
            className="group flex flex-col items-center py-8 text-sm bg-[#f7f8fc] border border-gray-300 w-96 rounded-md cursor-pointer hover:border-white

 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="w-74 h-auto rounded-full"
              src={postdivorcetherepy}
              alt="userImage2"
            />
            <h2
              className="text-gray-700 text-xl font-extrabold  mt-7"
            >

              Journals
            </h2>
            <p
              className="text-gray-500/80 text-base leading-8 mt-5"
              >
              Write freely or use prompts to reflect, declutter your mind, and boost clarity.
            </p>
            
          </div>
              </NavLink>

          <div
            className="group flex flex-col items-center py-8 text-sm bg-[#f7f8fc] border border-gray-300 w-96 rounded-md cursor-pointer hover:border-white

 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="w-74 h-auto rounded-full"
              src={ChildrenTherepy}
              alt="userImage3"
            />
            <h2
              className="text-gray-700 text-xl font-extrabold  mt-7"
            >
              Mood Log
            </h2>
            <p
              className="text-gray-500/80 text-base leading-8 mt-5"
            >
              Track your mood daily and get insights to improve your mental well-being.
            </p>
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default HSServices;
