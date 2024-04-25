import React, { useEffect, useState, useRef } from "react";
import "./section11.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Section11 = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const options = {
    root: null, // Observe the entire viewport
    threshold: 0.5, // Trigger animation when 50% of the section is in view
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // Assuming only one section is observed
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(sectionRef.current);

    return () => observer.unobserve(sectionRef.current);
  }, [options, sectionRef]); // Only recreate observer on options/ref change

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.5 } });
    }
  }, [controls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="section11-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="section11-design-wrapper">
        <AnimatePresence>
          {isVisible && (
            <motion.img
              src="gallery-163.jpg"
              alt="user image"
              className="formImage"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
            />
          )}
        </AnimatePresence>
       
        <AnimatePresence>
          {isVisible && (
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
            >
              Submit Message
            </motion.h1>
          )}
        </AnimatePresence>
        <form action="">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="formItem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}
              >
                <label htmlFor="Email address">Email address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Email address"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="formItem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
              >
                <label htmlFor="Email address">Phone number</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Phone number"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="formItem"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.0 } }}
              >
                <label htmlFor="Email address">Message</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Message"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="button-div">
            <AnimatePresence>
              {isVisible && (
                <motion.button
                  className="button-submit"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } }}
                >
                  Submit Form
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isVisible && (
                <motion.button
                  className="button-callMe"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.4 } }}
                >
                  Call Me Now
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Section11;
