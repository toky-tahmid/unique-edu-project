/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const EduCard = () => {
  const { id } = useParams();
  const cards = useLoaderData();
  const [eduCard, setEduCard] = useState(null); // Initialize with null

  useEffect(() => {
    if (Array.isArray(cards) && cards.length > 0) {
      const findEduCard = cards.find((card) => card.id === parseInt(id));
        setEduCard(findEduCard);
    } 
    
  }, [id, cards]);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  if (!eduCard) {
    return;
  }

  return (
    <div className="card lg:card-side ml-11 w-3/4 bg-base-100 shadow-xl" data-aos="fade-right" data-aos-once="true">
      <figure>
        <img src={eduCard.image} alt={eduCard.name} />
      </figure>
      <div className="card-body">
      <p className="text-xl font-medium rounded-md py-1 px-2 bg-red-200 text-center">{eduCard.category}</p>
        <p className="font-semibold">{eduCard.long_description}</p>
      </div>
    </div>
  );
};

export default EduCard;
