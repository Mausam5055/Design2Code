import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Nav({ isOpen, toggleMenu }) {

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const bigTextAnimation = (delay) => ({
    initial: { y: 100 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const smallTextAnimation = (delay) => ({
    initial: { y: 25 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Close the menu after navigation
      toggleMenu();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#dcfebc] z-40 text-black text-xs flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full pt-20 flex-1">
              <div className="w-full px-4">
                <div className="w-full">
                  <div className="overflow-hidden">
                    
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.1)}>
                        <div
                          className="text-4xl text-black cursor-pointer"
                          onClick={() => scrollToSection('testimonials')}
                        >
                          Event Details
                        </div>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.2)}
                        className="text-4xl text-gray-500"
                      >
                        01
                      </motion.div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="flex pb-1 items-start text-4xl justify-between">
                    <div className="flex-1 pr-4">
                      <div className="overflow-hidden">
                        <motion.div 
                          {...bigTextAnimation(1.3)}
                          className="text-4xl text-black cursor-pointer leading-tight break-words"
                          onClick={() => scrollToSection('ourgoals')}
                        >
                          Evaluators
                        </motion.div>
                      </div>
                    </div>
                    <div className="overflow-hidden flex-shrink-0">
                      <motion.div
                        {...bigTextAnimation(1.4)}
                        className="text-4xl text-gray-500"
                      >
                        02
                      </motion.div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden pb-1">
                      <motion.div {...bigTextAnimation(1.5)}>
                        <Link
                          to="/register"
                          className="text-4xl text-black cursor-pointer block"
                          onClick={toggleMenu}
                        >
                          Register Now
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden pb-1">
                      <motion.div
                        {...bigTextAnimation(1.6)}
                        className="text-4xl text-gray-500"
                      >
                        03
                      </motion.div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="w-full px-4 pb-4">
              <div className="overflow-hidden space-y-2 pt-4 border-t border-gray-200">
                <motion.div {...smallTextAnimation(1.7)}>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                    onClick={toggleMenu} // Close menu when clicking external link
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </motion.div>
                <motion.div {...smallTextAnimation(1.8)}>
                  <a
                    href="https://www.linkedin.com/company/ux-club-vit-bhopal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                    onClick={toggleMenu} // Close menu when clicking external link
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </motion.div>
              </div>
              <div className="flex items-center justify-between text-sm mt-4 pt-4 border-t border-gray-200">
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.9)}
                    className="text-gray-600"
                  >
                    Designed by UX Club, VIT Bhopal
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};