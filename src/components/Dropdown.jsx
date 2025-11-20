import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
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
    initial: { y: 50 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const smallTextAnimation = (delay) => ({
    initial: { y: 25 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const underlineAnimation = (delay) => ({
    initial: { width: 0 },
    animate: { width: "100%", transition: { delay, duration: 1, ease: "easeInOut" } },
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
            className="lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#eceae5] z-40 text-[#0e0e0e] text-xs flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full pt-20 flex-1">
              <div className="w-full px-4">
                <div className="w-full">
                  <div className="overflow-hidden">
                    <motion.h2
                      {...smallTextAnimation(1)}
                      className="pb-2 text-zinc-500 font-medium"
                    >
                      (Navigation)
                    </motion.h2>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.05)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.1)}>
                        <div
                          className="text-4xl text-[#0e0e0e] cursor-pointer"
                          onClick={() => scrollToSection('testimonials')}
                        >
                          Event Details
                        </div>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.2)}
                        className="text-4xl text-zinc-500"
                      >
                        01
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.25)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.3)}>
                        <div
                          className="text-4xl text-[#0e0e0e] cursor-pointer"
                          onClick={() => scrollToSection('ourgoals')}
                        >
                          Evaluation Committee
                        </div>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.4)}
                        className="text-4xl text-zinc-500"
                      >
                        02
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.45)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.5)}>
                        <div
                          className="text-4xl text-[#0e0e0e] cursor-pointer"
                          onClick={() => {
                            // You can add registration logic here
                            alert('Registration functionality would go here');
                            toggleMenu(); // Close the menu
                          }}
                        >
                          Register Now
                        </div>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.6)}
                        className="text-4xl text-zinc-500"
                      >
                        03
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.65)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pb-4">
              <div className="overflow-hidden">
                <motion.div {...smallTextAnimation(1.7)}>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                    onClick={toggleMenu} // Close menu when clicking external link
                  >
                    Instagram
                  </a>
                </motion.div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.8)}
                    className="flex flex-col leading-none"
                  >
                    <h1>Collectible Furniture</h1>
                    <h1>and Objects</h1>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.8)}
                    className="flex flex-col leading-none"
                  >
                    <h1>Designed by</h1>
                    <h1>UX Club, VIT Bhopal</h1>
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