/* eslint-disable react/prop-types */
import Card from "./Card";


const Cards = ({events}) => {
    return (
        <>
            <div className="text-center text-3xl font-bold mt-6">OUR SERVICES</div>
            <br />
            <hr />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 ">
        {
         events?.map(event => <Card key={event.id} event={event}></Card>)
        } 
     </div>
     </>
    );
};

export default Cards;