import React, { useState, createContext } from "react";
import Navbar from "./ components/Navbar/Navbar";
import Home from "./ components/Home/Home";
import About from "./ components/About/About";
import Service from "./ components/Service/Service";
import Testimonial from "./ components/Testimonial/Testimonial";
import Subscription from "./ components/Subscription/Subscription";
import Footer from "./ components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Team from "./ components/Team/Team";
import Feedback from "./ components/Feedback/Feedback";
import Video from "./ components/Video/Video";
import Career from "./ components/Faq/Career";
import NavbarMobileView from "./ components/Navbar/NavbarMobileView";
import "./App.css";
import Contact from "./ components/Contact/Contact.js";

export const ThemeContext = createContext(null);

const App = () => {
  // button for change theme dark to light
  const [theme, setTheme] = useState("light");

  const handleChnageTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleChnageTheme }}>
        <Navbar />
        <NavbarMobileView theme={theme} handleChnageTheme={handleChnageTheme} />
        <Home  theme={theme} handleChnageTheme={handleChnageTheme}/>

        <div className="main-theme-compo" id={theme}>
          <About />
          <Service />
          <Career />
          <Video />
          <Team />
          <Testimonial />
          <Feedback />
        </div>
        <Contact />
        <Subscription />
        <Footer />

        <div>
          <ScrollToTop
            smooth
            height="20"
            width="20"
            color="white"
            style={{ borderRadius: "90px", backgroundColor: "#330032" }}
          />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
