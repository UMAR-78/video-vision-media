import React, { useEffect, useState, useRef } from "react";
import "./section3.css";
import { motion, useAnimation } from "framer-motion";

const Section3 = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const options = {
    root: null, // Observe the entire viewport
    threshold: 0.7, // Trigger animation when 50% of the section is in view
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
      controls.start({ opacity: 0, y: -40, transition: { duration: 0.5 } });
    }
  }, [controls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="section3-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      exit={{ opacity: null, y: null }} // Maintain last state after animation ends
    >
      <h1 className="section3-content">
        Live Satellite Broadcast <br /> Live Fiber Link Delivery <br /> Live
        Streaming & VOD <br />
        Remote Production Facility <br /> Content Delivery & <br />
        Distribution
      </h1>
    </motion.div>
  );
};

export default Section3;
