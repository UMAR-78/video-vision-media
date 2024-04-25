import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./section1.css";

const Section1 = () => {
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
      className="section1-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      <div className="section1-design-wraper">
        <p className="section1-first-text">Media Broadcast Solution Provider</p>
        <h1 className="section1-main-heading">VIDEO VISION MEDIA</h1>
        <p className="section1-last-text">Complete Live Streaming Solution</p>
      </div>
    </motion.div>
  );
};

export default Section1;
