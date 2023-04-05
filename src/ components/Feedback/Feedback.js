import React from "react";
import Slider from "react-slick";
import "./Feedback.css";

import Fade from "react-reveal/Fade";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Feedback = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Alex Ados",
      position: "Developper web",
    },
    {
      img: "https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Muller",
      position: "Ux/ Ui",
    },
    {
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Emliy",
      position: "Developper web",
    },
    {
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Jadine",
      position: "Developper fullstack",
    },
    {
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Alexander",
      position: "Developper react js ",
    },
    {
      img: "https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: " jacob ",
      position: "Developper web",
    },
    {
      img: "https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Muller",
      position: "Ux/ Ui",
    },
    {
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Emliy",
      position: "Developper web",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    // slidesToScroll: 1,
  };

  return (
    <div id="feedback" className="container feedback-slider">
      {/* Section title */}
      <div className="section_title">
        <h5>FeedBack</h5>
        <span className="line"></span>
      </div>

      <div className="feedback-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Fade >
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
              <div className="card content-slider" >
                <img
                  src={item.img}
                  alt="sliderimage"
                  className="center-image"
                />
                <p>{item.content}</p>
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
            </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
