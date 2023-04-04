import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  /* navbar scroll changed color */

  const [changeColorScroll, setChangeColorScroll] = useState(false);

  const onchangeNavColor = () => {
    if (window.scrollY >= 100) {
      setChangeColorScroll(true);
    } else {
      setChangeColorScroll(false);
    }
  };

  window.addEventListener("scroll", onchangeNavColor);

  return (
    <nav
      className={
        changeColorScroll ? "navbar-scroll-color navbar-main" : "navbar-main"
      }
    >
      <ul>
        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Service
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="career"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Career
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="career"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Video
          </Link>
        </li>

        <li className="nav-item">
          <Link to="team" spy={true} smooth={true} offset={100} duration={100}>
            Team
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={100}
            duration={100}
          >
            Testimonianl
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="feedback"
            spy={true}
            smooth={true}
            offset={100}
            duration={100}
          >
            Feedback
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={100}
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={100}
          >
            Subscription
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
