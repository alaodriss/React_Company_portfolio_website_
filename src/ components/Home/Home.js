import React from "react";
import "./Home.css";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home">
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
    </div>
  );
};

export default Home;
