import { IoBulb } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
const Possibilities = () => {

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Unlimited Possibilities</h1>
      <br />
      <hr />
      <div className="md:flex-row lg:flex w-auto">
        <div className="mt-8">
            <FaBook className=" ml-52 text-2xl"></FaBook>
          <h2 className="text-2xl font-semibold">Online Courses</h2>
          <h5 className="text-xl font-medium">
            Choose from hundreds of free training courses, pay to get
            certified to complete a course or specialization.
          </h5>
        </div>
        <div className="mt-8">
        <IoBulb className="ml-64 text-2xl"></IoBulb>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-xl font-medium">
            Developing strong vision and mission statements can help
            stakeholders in your school reach such a common understanding.
          </p>
        </div>
        <div className="mt-8">
            <GrAchievement className=" ml-64 text-2xl"></GrAchievement>
          <h2 className="text-2xl font-semibold">Professional Certificate</h2>
          <p className="text-xl font-medium">
            Join the millions of students around the world who are already
            learning! Find an experienced and suitable instructor only for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
