import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineUser, HiOutlineLogout } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import mindlogo from '../assets/mindlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  // Check auth status on component mount and when token changes
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    
    // Listen for login events from other components
    const handleStorageChange = () => {
      const newToken = localStorage.getItem('token');
      setIsLoggedIn(!!newToken);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setProfileOpen(false);
    navigate('/');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          className={`text-white ${activeSection === 'home' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('home'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink to="/">Home</NavLink>
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#services"
          className={`text-white ${activeSection === 'services' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('services'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#"
          className={`text-white ${activeSection === 'about' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo(''); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Mood Log
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#pricing"
          className={`text-white ${activeSection === 'pricing' ? 'isactive' : ''}`}
          onClick={(e) => { e.preventDefault(); handleScrollTo('pricing'); handleCloseMenu(); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          className={`text-white ${activeSection === 'testimonial' ? 'isactive' : ''}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink to="appointment">Appointment</NavLink>
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-white text-lg font-semibold">
          <a href="/" className='flex flex-wrap'>
            <img src={mindlogo} className='p-0 h-11 w-40 md:h-10' alt="logo" />
          </a>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            {navLinks}
          </nav>
        </div>
        <div className="hidden md:block relative">
          {isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center text-white hover:text-primary transition-colors"
                aria-label="User profile"
              >
                <HiOutlineUser className="w-6 h-6" />
              </button>
              {profileOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <NavLink
                    to="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                  >
                    <HiOutlineLogout className="mr-2" />
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <NavLink to="signin">
              <div className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded">
                Login
              </div>
            </NavLink>
          )}
        </div>
        <div className="block md:hidden">
          <button 
            onClick={handleToggle}
            className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}
            aria-label="Toggle menu"
          >
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden"
        >
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li className='py-2'>
              {isLoggedIn ? (
                <>
                  <NavLink 
                    to="/profile"
                    onClick={handleCloseMenu}
                    className="block text-white px-4 py-2 hover:bg-primary/10 rounded"
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      handleCloseMenu();
                    }}
                    className="flex items-center w-full text-white px-4 py-2 hover:bg-primary/10 rounded text-left"
                  >
                    <HiOutlineLogout className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <NavLink 
                  to="signin"
                  onClick={handleCloseMenu}
                  className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded block text-center"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;