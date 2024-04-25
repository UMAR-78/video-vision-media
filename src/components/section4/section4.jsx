import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./section4.css";

const Section4 = () => {
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
      className="section4-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }} // Start below the viewport
      animate={controls}
    >
      <div className="section4Design-div2">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.div
                className="section4-upper-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
              >
                <h1 className="section4-upper-content-heading">
                  Satellite FlyAway, SNG Teleport Uplink
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }} // Start below the viewport
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }}
              >
                <h1 className="section4-upper-content-heading  section4-upper-content-heading1   ">
                  Ultra HD - 4K | Full HD
                </h1>
              </motion.div>
              <motion.button
                className="button-book-now"
                initial={{ opacity: 0, y: 100 }} // Start below the viewport
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9 } }}
              >
                Book Now!
              </motion.button>
            </>
          )}
        </AnimatePresence>
        
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="section4--lower-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.1 } }}
          >
            <motion.div
              className="section4--lower-content-box"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.2 } }}
            >
              <h3>Compression</h3>
              <p>
                JPEG 2000, JPEG SX, HEVC-H265, MPEG4-H.264, MPEG2-AVC, HD, SD,
                PAL/NTSC, UpDown Conversion
              </p>
            </motion.div>
            <motion.div
              className="section4--lower-content-box"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.4 } }}
            >
              <h3>Band</h3>
              <p>
                C-Band, Ku Band, Ka Band, Linear, Circular, Universal Band, and S
                Band, DATA VSAT Terminals & Bandwidth
              </p>
            </motion.div>
            <motion.div
              className="section4--lower-content-box"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.6 } }}
            >
              <h3>Power</h3>
              <p>
                36/54/72 MHz High Power Uplink, 2+2 & 1+1 Feed, SCPC, MCPC Uplink
                Fully Redundant Facility
              </p>
            </motion.div>
            <motion.div
              className="section4--lower-content-box"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.8 } }}
            >
              <h3>Encryption</h3>
              <p>
                DRM, Digital Right Management, NovelSat NS3/NS4, BISS-CA, BISS1/2,
                RAS Nagra and Irdeto,
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Section4;
