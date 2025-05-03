import React, { useState, useEffect } from 'react';

const AutoQuoteGenerator = () => {
  
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. - Mother Teresa"
  ];

 
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % quotes.length;
        setCurrentQuote(quotes[nextIndex]);
        return nextIndex;
      });
    }, 10000); 

    return () => clearInterval(interval); 
  }, [quotes]);

  return (
    <div className=" text-4xl font-secondary font-bold mb-4 md:w-4/5 leading-snug">
      
      <p className="text-lg italic">"{currentQuote}"</p>
      
    </div>
  );
};

export default AutoQuoteGenerator;