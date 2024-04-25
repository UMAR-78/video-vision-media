import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./section2.css";

const Section2 = () => {
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
      className="section2-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      <div className="section2-design-wrapper">
        <div className="section2-upper-content">
          <h1 className="section2-upper-content-h1">Contribution : Distribution : Streaming</h1>
          <p className="section2-upper-content-p">Satellite Television, Broadcasters, Event Organizers Government Org.</p>
        </div>
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div className="section2-lower-content">
            {["Satellite", "Fiber", "Internet", "OTT"].map((heading, index) => (
              <motion.div
                key={index}
                className="section2-lower-content-div"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
              >
                <img className="section2-lower-content-img" src={`./gallery-45-${index + 1}.jpg`} alt="" />
                <h6 className="section2-lower-content-heading">{heading}</h6>
                <p className="section2-lower-content-text">
                  {heading === "Satellite"
                    ? "Space, SNG, Uplink, Downlink & DTH Platform"
                    : heading === "Fiber"
                    ? "P2P Link, Layer2/3, Int'l Connectivity"
                    : heading === "Internet"
                    ? "Bandwidth, Dedicated, MultiCast, IP Transit Link"
                    : "Android, iOS, Chrome, Connected TV, MAG TV"}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Section2;
