import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Possibilities from "../Possibilities/Possibilities";
import Articles from "../Articals/Articles";

const Home = () => {
    const events = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Cards events={events}></Cards>
           <Possibilities></Possibilities>
           <Articles></Articles>

        </div>
    );
};

export default Home;