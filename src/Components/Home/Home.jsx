import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";

const Home = () => {
    const events = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Cards events={events}></Cards>

        </div>
    );
};

export default Home;