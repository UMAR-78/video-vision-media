import React, { useEffect, useState, useRef } from "react";
import "./section9.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Section9 = () => {
  const headingControls = useAnimation();
  const buttonControls = useAnimation();
  const boxControls = useAnimation();
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
      headingControls.start({ scale: 1, transition: { duration: 0.5 } });
      buttonControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } });
      boxControls.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.7 } });
    } else {
      headingControls.start({ scale: 0.5 });
      buttonControls.start({ opacity: 0, y: 50 });
      boxControls.start({ opacity: 0, x: -50 });
    }
  }, [headingControls, buttonControls, boxControls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="section9-design"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="section9Design-div2">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="section9-upper-content"
              initial={{ scale: 0.5 }}
              animate={headingControls}
            >
              <h1 className="section9-upper-content-heading">
                Streaming Live, OTT, IPTV, VOD, Connected TV
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.button
              className="button-book-now"
              initial={{ opacity: 0, y: 50 }}
              animate={buttonControls}
            >
              Book Now!
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="section9--lower-content"
            initial={{ opacity: 0, x: -50 }}
            animate={boxControls}
          >
            <motion.div className="section9--lower-content-box">
              <h3>Streaming Protocol</h3>
              <p>ZIXI, SRT, HLS, MPEG-DASH, RTMP, RTSP, RTP, UDP etc.</p>
            </motion.div>
            <motion.div className="section9--lower-content-box">
              <h3>Streaming Codec</h3>
              <p>H.264, H.265, Baseline, Main & High, AVC, Coding, VCC, VP9</p>
            </motion.div>
            <motion.div className="section9--lower-content-box">
              <h3>Broadcast Streaming</h3>
              <p>JPEG2000, JPEG-SX, ZIXI, SRT upto 200MB DataRate</p>
            </motion.div>
            <motion.div className="section9--lower-content-box">
              <h3>DRM & GEO Block</h3>
              <p>Android, iOS, Chrome, iOS TV, Smart TV, Multiple Devices.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Section9;
