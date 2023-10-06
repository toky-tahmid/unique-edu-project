import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = () => {
  return (
    <div>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form  className=" md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
        </div>
        <div className=" text-center mt-6">
          <button className="btn btn-primary px-9">Login</button>
        </div>
        <div className='p-4 space-y-2 text-center'>
                <h2 className="text-2xl font-medium "> Or Login With</h2>
                <button className="btn btn-outline">
                    <AiOutlineGoogle></AiOutlineGoogle>
                    Google
                </button>
                
            </div>
      </form>
      <p className="text-center mt-4">
        Do not have an account{" "}
        <Link className="text-blue-600 font-bold" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
