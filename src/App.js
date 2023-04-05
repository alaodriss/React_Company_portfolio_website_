import React from "react";
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
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Career />
      <Video />
      <Team />
      <Testimonial />
      <Feedback />
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
    </>
  );
};

export default App;
