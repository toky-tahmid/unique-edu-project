/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ event }) => {
  const {id,image, name, category, short_description, price } = event || {};
  return (
    <div className="card h-80  shadow-xl image-full">
    <figure><img  src={image} alt="events" /></figure>
    <div className="card-body text-center">
      <h2 className="card-title  text-2xl ml-24">{name}</h2>
      <p className="text-xl font-medium">{category}</p>
      <p className=" font-normal">{short_description}</p>
      <p className="text-xl font-medium"> Price: {price}</p>
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
