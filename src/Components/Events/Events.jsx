import { FcClock, FcGlobe, FcHome, FcLeave } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Events = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, [])
  return (
    <>
    <h1 className="text-center font-bold text-4xl mb-6">Upcoming Events!</h1>
    <hr />
    <br />
      <div>
      <div className="card card-side w-full md:w-2/3 lg:w-[80vh] mx-auto md:ml-0 lg:ml-96 bg-base-100 mb-4 shadow-xl" data-aos="fade-down">

        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">
            Social Media Marketing Masterclass
          </h2>
          <p className="w-80">
          Boost your brand online with our Social Media Masterclass. Perfect for entrepreneurs. Learn platform strategies, content creation, and analytics. Enroll now for expert guidance.
          </p>
          <hr />
          <div className="flex gap-6">
            <div>
              <div className="flex">
                <FcLeave className="mt-1"></FcLeave>
                <h6>14 December, 2023</h6>
              </div>
              <div className="flex">
                <FcClock className="mt-1"></FcClock>
                <h6>29 Day Left</h6>
              </div>
            </div>
            <div>
              <div className="flex">
                <FcGlobe className="mt-1"></FcGlobe>
                <h6>Dhaka,Bangladesh</h6>
              </div>
              <div className="flex">
                <FcHome className="mt-1"></FcHome>
                <h6>View Map Location</h6>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-info text-white">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-side w-full md:w-2/3 lg:w-[80vh] mx-auto md:ml-0 lg:ml-96 bg-base-100 mb-4 shadow-xl" data-aos="fade-down">
        
        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">
          Data Analysis Workshops
          </h2>
          <p className="w-80">
          This topic can cover various aspects of data analysis, including techniques, tools, and real-world applications. Free workshops can provide introductory sessions on data analysis for beginners or delve into advanced topics for experienced professionals.
          </p>
          <hr />
          <div className="flex gap-6">
            <div>
              <div className="flex">
                <FcLeave className="mt-1"></FcLeave>
                <h6>14 December, 2023</h6>
              </div>
              <div className="flex">
                <FcClock className="mt-1"></FcClock>
                <h6>29 Day Left</h6>
              </div>
            </div>
            <div>
              <div className="flex">
                <FcGlobe className="mt-1"></FcGlobe>
                <h6>Dhaka,Bangladesh</h6>
              </div>
              <div className="flex">
                <FcHome className="mt-1"></FcHome>
                <h6>View Map Location</h6>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-info text-white">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-side w-full md:w-2/3 lg:w-[80vh] mx-auto md:ml-0 lg:ml-96 bg-base-100 mb-4 shadow-xl" data-aos="fade-down">
        
        <div className="card-body">
          <h2 className="card-title font-semibold text-xl">
          Business Analytics Free Webinar
          </h2>
          <p className="w-80">
          Dive into data-driven decisions in our free Business Analytics Webinar. Learn tools, real applications, and industry insights. Reserve your spot for expert knowledge and interactive sessions.
          </p>
          <hr />
          <div className="flex gap-6">
            <div>
              <div className="flex">
                <FcLeave className="mt-1"></FcLeave>
                <h6>14 December, 2023</h6>
              </div>
              <div className="flex">
                <FcClock className="mt-1"></FcClock>
                <h6>29 Day Left</h6>
              </div>
            </div>
            <div>
              <div className="flex">
                <FcGlobe className="mt-1"></FcGlobe>
                <h6>Dhaka,Bangladesh</h6>
              </div>
              <div className="flex">
                <FcHome className="mt-1"></FcHome>
                <h6>View Map Location</h6>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-info text-white">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-side w-full md:w-2/3 lg:w-[80vh] mx-auto md:ml-0 lg:ml-96 bg-base-100 mb-4 shadow-xl" data-aos="fade-down">
        
        <div className="card-body">
          <h2 className="card-title font-semibold text-2xl">
          Data Science and Predictive Modeling Workshop
          </h2>
          <p className="w-80">
          Dive into the world of data science and predictive modeling in our immersive workshop. Explore advanced algorithms and real-world applications. Elevate your analytical expertise. Register now for a data-driven future!
          </p>
          <hr />
          <div className="flex gap-6">
            <div>
              <div className="flex">
                <FcLeave className="mt-1"></FcLeave>
                <h6>14 December, 2023</h6>
              </div>
              <div className="flex">
                <FcClock className="mt-1"></FcClock>
                <h6>29 Day Left</h6>
              </div>
            </div>
            <div>
              <div className="flex">
                <FcGlobe className="mt-1"></FcGlobe>
                <h6>Dhaka,Bangladesh</h6>
              </div>
              <div className="flex">
                <FcHome className="mt-1"></FcHome>
                <h6>View Map Location</h6>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-info text-white">Read More</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Events;
