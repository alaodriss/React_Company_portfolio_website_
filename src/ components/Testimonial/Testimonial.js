import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
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
    {
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=800",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
      name: "Jadine",
      position: "Developper fullstack",
    },
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
  ];

  const [showMore, steShowMore] = useState(6);

  const loadMore = () => {
    steShowMore((prev) => prev + 3);
  };

  return (
    <div id="testimonial" className="container testimonal-section">
      {/* Section title */}
      <div className="section_title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMore).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

            <div className={index === 1 ? "marked-content-card" : "content-card"}>
              <img src={item.img} alt="img" />
              <p>{item.content}</p>
              <p>
                <span className="name">{item.name}</span>
              </p>
              <p>{item.position}</p>
            </div>

          </div>
        ))}
      </div>
      {showMore >= data.length ? null : (
          <span className="load-more-button" onClick={loadMore}>
            Load More
          </span>
        )}
    </div>
  );
};

export default Testimonial;
