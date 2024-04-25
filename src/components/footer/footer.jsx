import React, { useEffect, useState, useRef } from "react";
import "./footer.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Footer = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const options = {
    root: null, // Observe the entire viewport
    threshold: 0.5, // Trigger animation when 50% of the footer is in view
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // Assuming only one footer is observed
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(footerRef.current);

    return () => observer.unobserve(footerRef.current);
  }, [options, footerRef]); // Only recreate observer on options/ref change

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.5 } });
    }
  }, [controls, isVisible]); // Animate based on visibility state

  return (
    <motion.div
      className="footer-design"
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="footer-design-wrapper">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.h6
                className="footer-design-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                SUPPORT & MCR
              </motion.h6>

              <motion.a
                href="mailto:#"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
                info@videovision.io
              </motion.a>

              <motion.h6
                className="footer-design-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                BOOKING
              </motion.h6>

              <motion.a
                href="mailto:#"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                info@videovision.io
              </motion.a>

              <motion.h6
                className="footer-design-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                Webiste
              </motion.h6>

              <motion.a
                href="https://videovision.io/"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                https://videovision.io/
              </motion.a>

              <motion.h6
                className="footer-design-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                STAY IN TOUCH
              </motion.h6>

              <motion.div className="footer-social-icons"  initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.9 },
                }}>
                <a href="#">
                  <img src="facebook.png" alt="" className="social-icon" />
                </a>
                <a href="#">
                  <img src="instagram.png" alt="" className="social-icon" />
                </a>
                <a href="#">
                  <img src="behance.png" alt="" className="social-icon" />
                </a>
                <a href="#">
                  <img src="dribble.png" alt="" className="social-icon" />
                </a>
                <a href="#">
                  <img src="medium.png" alt="" className="social-icon" />
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Footer;
