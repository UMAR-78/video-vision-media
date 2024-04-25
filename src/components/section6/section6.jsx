import React, { useEffect, useState, useRef } from "react";
import "./section6.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Section6 = () => {
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
  }, [options]); // Only recreate observer on options change

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.5 } });
    }
  }, [controls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="section6-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Start below the viewport
      animate={controls}
    >
      <div className="section6-design-wrapper">
        <AnimatePresence>
          {isVisible && (
            <div className="section6-design-upper-content">
              <h1 className="section6-design-upper-content-heading">
                Ultra HD | 4K, HD Fibre Link
              </h1>
              <p className="section6-design-upper-content-text">
                Current Fibre Network available{" "}
                <span className="highlitedText">10 Gigabyte Ethernet</span>,
                expandable <span className="highlitedText">100 Gbps.</span>
              </p>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisible && (
            <div className="section6-design-lower-content">
              <motion.div
                className="section6-design-lower-content-box"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
              >
                <p>
                  Fibre Network deliver{" "}
                  <span className="highlitedText">
                    Full HD Camera Feeds and Multi Track Audio
                  </span>{" "}
                  to Production Facility, or your MCR for final Production. Our
                  Production Facility available for{" "}
                  <span className="highlitedText">
                    Cricket, Football, Horse Race and Multi Cam Production.
                  </span>
                </p>
              </motion.div>
              <motion.div
                className="section6-design-lower-content-box"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.7 } }}
              >
                <p>
                  Fibre Network Connected in{" "}
                  <span className="highlitedText">
                    Several Countries and their Prominent Sports and Entertainment
                    Event
                  </span>{" "}
                  Location. Our MCR, NOCs (Network Operation Centre) provide 24/7
                  Full{" "}
                  <span className="highlitedText">
                    Network Support, Monitoring and Management.
                  </span>
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Section6;
