import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { fadeIn } from "../utilis/animationVariants";
import AutoQuoteChanger from './AutoQuoteChanger';

const Hero = () => {
    return (
        <section className="bg-heroBg text-white flex items-center pt-28 md:h-screen" id="home">
            <div className='container mx-auto flex flex-col md:flex-row-reverse items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>

                {/* Right Side */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2 h-full"
                >
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full object-cover"
                    />
                </motion.div>

                {/* Left Side */}
                <div
                    className="md:w-1/2"
                >
                    <AutoQuoteChanger/>

                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-4xl font-secondary font-bold mb-4 md:w-4/5 leading-snug">
                        Your AI Companion for a Happier Mind-
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-lg mb-12 md:pr-8">
                        MindSmile is a mental health app that blends AI, mood-based activities, and relaxing games. It offers personalized support, professional help, and multilingual accessibility to make mental wellness engaging and accessible.
                    </motion.p>
                    <motion.button
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-primary text-white py-3.5 px-8 font-medium rounded hover:bg-primary/90 flex gap-1 items-center">
                        <span>Get Started</span>
                        <IoArrowForwardCircleSharp className='size-6' />
                    </motion.button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
