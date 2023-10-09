import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Articles = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])


  return (
    <div className="mt-9 text-center">
      <h4 className="text-xl font-semibold">The Best Choice</h4>
      <h1 className="text-3xl font-bold">Latest News & Articles</h1>
      <hr />

      <div className=" md:flex-row ml-44 lg:flex justify-evenly mr-24 mt-10" data-aos="zoom-in">
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://www.careeraddict.com/uploads/article/60200/free-online-courses.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Enhance Your Expertise with 6 Free Online Training Sessions</h2>
          
            <p className=" font-normal"> Posted On: 01.20.2017 by John</p>
            <div className="card-actions justify-end">
    
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img className="h-56 w-full"
              src="https://impact.hellomen.com/wp-content/uploads/2021/02/Professional-development-Program.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Professional Development Program</h2>
            <p className=" font-normal"> Posted On: 01.20.2017 by Mark </p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://elearningindustry.com/wp-content/uploads/2021/07/Create-Interactive-eLearning-Content-In-3-Steps.png"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Interactive Educational and Training Events</h2>
            <p className=" font-normal"> Posted On: 01.20.2017 by Mark Chapman</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
