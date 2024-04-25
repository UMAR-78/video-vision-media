import React, { useEffect, useState, useRef } from "react";
import "./section7.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { PiFlowerTulipFill } from "react-icons/pi";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

const Section7 = () => {
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
      className="section7-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Start below the viewport
      animate={controls}
    >
      <div className="section7-design-wrapper">
        <AnimatePresence>
          {isVisible && (
            <div className="section7-design-upper-content">
              <h1>Broadcast with Confidence</h1>
              <p>
                The World’s Leading Broadcasters Trust on Video Vision's
                Broadcasting Solutions and Live Streaming for High Quality, Low
                Latency Contribution and Distribution Workflows.
              </p>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisible && (
            <div className="section7-design-lower-content">
              <motion.div
                className="section7-design-lower-content-box"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
              >
                <FaLocationArrow className="icon" />
                <div>
                  <h2>Remote Contribution</h2>
                  <p>
                    Instantly receive broadcast-quality contribution feeds from
                    remotely located news anchors, TV show hosts and invited guests.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="section7-design-lower-content-box"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }}
              >
                <RiCheckboxMultipleBlankFill className="icon" />
                <div>
                  <h2>Multi-Camera Remote Production</h2>
                  <p>
                    Dramatically reduce costs by traveling less to sports and entertainment venues while transporting raw feeds to a central studio.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="section7-design-lower-content-box"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9 } }}
              >
                <BsCameraVideoFill className="icon" />
                <div>
                  <h2>Monitoring and Return Feeds</h2>
                  <p>
                    Provide remote talent, directors, colorists and technicians with real-time video streams for both live and post-production environments.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="section7-design-lower-content-box"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.1 } }}
              >
                <PiFlowerTulipFill className="icon" />
                <div>
                  <h2>Virtual Conference Production</h2>
                  <p>
                    Invite multiple speakers into a video conference environment to produce a professional TV show.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Section7;
