import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Chatbot.css';

const FixedTag = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://health-assistant-zeta.vercel.app/', '_blank');
  };

  return (
    <motion.div
      className="fixed-tag"
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FiExternalLink className="tag-icon" />
      {isHovered && <span className="tag-text">Ziva</span>}
      <div className="pulse-effect"></div>
    </motion.div>
  );
};

export default FixedTag;