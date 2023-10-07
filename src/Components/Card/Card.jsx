/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ event }) => {
  const { id, image, name, category, short_description, price } = event || {};

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])

  return (
    <div className="card h-80 shadow-xl image-full" data-aos="fade-right" >
      <figure>
        <img src={image} alt="events" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-2xl ml-24">{name}</h2>
        <p className="text-xl font-medium rounded-md py-1 ">{category}</p>
        <p className="font-normal">{short_description}</p>
        <p className="text-xl font-medium">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/eduCard/${id}`}>
            <button className="btn btn-primary text-center mr-36">Explore More</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
