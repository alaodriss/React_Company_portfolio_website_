import React from "react";
import "./Home.css";
import TypeWriterEffect from "react-typewriter-effect";
import Fade from 'react-reveal/Fade';
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";



const Home = ({theme,handleChnageTheme}) => {
  return (
    <div className="container-fluid home" id="home">


      <div className="theme-change" onClick={()=> handleChnageTheme()}>
        {theme === "light" ?(<BsFillMoonStarsFill size={30}/>) : (<BsFillSunFill size={30}/>)}
      </div>
      <Fade left>
      <div className="container home-content">
        <TypeWriterEffect
          textStyle={{ fontFamily: "Red Hat Display" }}
          startDelay={100}
          cursorColor="black"
          multiText={[
            "Web Developpement",
            "Mobile App Developpement",
            "UI/UX Design",
            "Digital Marketing",
          ]}
          typeSpeed={100}
        />
        <p>
          script est utile pour les personnes désirant obtenir du contenu
          rapidement, il est plutôt réservé aux développeurs web. En effet, en
          plus de générer du texte, il génère également un squelette HTML ainsi
          que des balises HTML pré-remplies afin d'accroitre la vitesse de
          programmation en évitant de perdre du temps dans le remplissage de
          celles-ci.
        </p>
        <span className="view-detalis-home-button">View More</span>
      </div>
      </Fade>
    </div>
  );
};

export default Home;
