import React, { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./section10.css";
import { RiMessage2Line } from "react-icons/ri";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Section10 = () => {
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

  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "iphone-82-1.png",
    "iphone-82-2.png",
    "iphone-82-3.png",
    "iphone-82-4.png",
  ]; // Add more image URLs as needed

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setImageIndex(index);
  };

  return (
    <motion.div
      className="section10-design"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="section10-wrapper">
        <div className="section10-slider">
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.div
                  className="sliderLeftArrow"
                  initial={{ x: -100, opacity: 0 }}
                  animate={
                    isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <MdKeyboardArrowLeft onClick={previousImage} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {images.map((image, index) => (
            <img
              className="sliderImage"
              src={image}
              alt=""
              key={index}
              style={{
                opacity: index === imageIndex ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
              onClick={nextImage} // Attach nextImage function to onClick event
            />
          ))}
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.div
                  className="sliderRightArrow"
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <MdKeyboardArrowRight onClick={nextImage} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              className="dots"
              initial={{ y: 100, opacity: 0 }}
              animate={
                isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              {images.map((image, index) => (
                <span
                  key={index}
                  className={index === imageIndex ? "dot active" : "dot"}
                  onClick={() => selectImage(index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          <motion.div
            className="section10-design-lowerContent"
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              Live Streaming <br /> Services
            </h1>
            <p>
              Broadcast Quality Livestreaming for Youtube , Facebook, Twitter
              and Instagram.
            </p>
            <button>
              <RiMessage2Line className="RiMessage2LineIcon" /> Free Trial
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Section10;
