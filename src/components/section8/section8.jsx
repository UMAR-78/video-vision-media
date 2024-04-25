import React, { useEffect, useState, useRef } from "react";
import "./section8.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Section8 = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();
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
      textControls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
      imageControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } });
    } else {
      textControls.start({ opacity: 0, scale: 0.5 });
      imageControls.start({ opacity: 0, y: 50 });
    }
  }, [textControls, imageControls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="section8-design"
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="section8-design-wrapper">
        <AnimatePresence>
          {isVisible && (
            <motion.h1
              className="section8-heading"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={textControls}
            >
              Platform! We support!
            </motion.h1>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.img
              src="https://videovision.io/assets/uploads/untitled-1.jpg?p=kxgiGqt8"
              alt=""
              className="section8-image"
              initial={{ opacity: 0, y: 50 }}
              animate={imageControls}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Section8;
