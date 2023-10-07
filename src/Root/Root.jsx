import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 mb-10"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;