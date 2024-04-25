// App.js

import React, { useEffect, useState } from "react";
import "./App.css"; // Import your CSS file
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section7";
import Section8 from "./components/section8/section8";
import Section9 from "./components/section9/section9";
import Section10 from "./components/section10/section10";
import Section11 from "./components/section11/section11";
import Footer from './components/footer/footer';

const App = () => {
  const sections = [
    { id: 1, component: Section1, backgroundColor: "white" },
    { id: 2, component: Section2, backgroundColor: "black" },
    { id: 3, component: Section3, backgroundColor: "white" },
    { id: 4, component: Section4, backgroundColor: "white" },
    { id: 5, component: Section5, backgroundColor: "white" },
    { id: 6, component: Section6, backgroundColor: "white" },
    { id: 7, component: Section7, backgroundColor: "white" },
    { id: 8, component: Section8, backgroundColor: "black" },
    { id: 9, component: Section9, backgroundColor: "white" },
    { id: 10, component: Section10, backgroundColor: "white" },
    { id: 11, component: Section11, backgroundColor: "black" },
    { id: 12, component: Footer, backgroundColor: "black" }
  ];

  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.replace("section", ""));
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(`section${section.id}`);
      observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(`section${section.id}`);
        observer.unobserve(element);
      });
    };
  }, [sections]);

  const handleNavigationClick = (id) => {
    setActiveSection(id);
    document.getElementById(`section${id}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      
      <div className="navigation">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`line ${activeSection === section.id ? "active" : ""} ${section.backgroundColor === "black" ? "blackBg" : ""}`}
            onClick={() => handleNavigationClick(section.id)}
          ></div>
        ))}
      </div>
      
      <div className="sections">
        {sections.map((section) => {
          const SectionComponent = section.component;
          return (
            <div key={`section${section.id}`} id={`section${section.id}`} className="section" style={{ backgroundColor: section.backgroundColor }}>
              <SectionComponent />
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default App;
