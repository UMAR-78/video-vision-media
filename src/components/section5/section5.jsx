import React, { useEffect, useState, useRef } from "react";
import "./section5.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const section5 = () => {
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
      controls.start({ opacity: 0, y: -50, transition: { duration: 0.5 } });
    }
  }, [controls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="section5-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Start below the viewport
      animate={controls}
    >
      <div className="section5-design-content">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Singapore, Mumbai, Doha, Dubai, London & Washington Connected!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 100 }} // Start below the viewport
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                <h1>
                  Upto 10 GB <br /> Provisioning <br />
                  Available!
                </h1>
                <h1 className="secondh1">
                  Fiber Network! <br />
                  Stadium, Venue to MCR Centralised <br />
                  Studio!
                </h1>
              </motion.div>

              <motion.button
                className="button-contact-booking"
                initial={{ opacity: 0, y: 100 }} // Start below the viewport
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.9 },
                }}
              >
                Contact Booking!
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default section5;
