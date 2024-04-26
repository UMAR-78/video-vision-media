import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./App.css";

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
import Footer from "./components/footer/footer";
import { useEffect } from "react";
const App = () => {
  
 

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection>
          <Section1 />
        </FullpageSection>
        <FullpageSection>
          <Section2 />
        </FullpageSection>
        <FullpageSection>
          <Section3 />
        </FullpageSection>
        <FullpageSection>
          <Section4 />
        </FullpageSection>
        <FullpageSection>
          <Section5 />
        </FullpageSection>
        <FullpageSection>
          <Section6 />
        </FullpageSection>
        <FullpageSection>
          <Section7 />
        </FullpageSection>
        <FullpageSection>
          <Section8 />
        </FullpageSection>
        <FullpageSection>
          <Section9 />
        </FullpageSection>
        <FullpageSection>
          <Section10 />
        </FullpageSection>
        <FullpageSection>
          <Section11 />
        </FullpageSection>
        <FullpageSection>
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default App;
