import { AiFillFacebook,AiFillTwitterCircle,AiFillInstagram,AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover font-semibold">About Us</a>
        <a className="link link-hover font-semibold">Contact Us</a>
      </nav>
      <nav>
        <p className="text-xl font-medium ">Follow Us On</p>
        <div className="grid grid-flow-col gap-4">
           <span className="text-2xl"><AiFillFacebook></AiFillFacebook></span> 
           <span className="text-2xl"><AiFillTwitterCircle></AiFillTwitterCircle></span> 
           <span className="text-2xl"><AiFillInstagram></AiFillInstagram></span> 
           <span className="text-2xl"><AiFillYoutube></AiFillYoutube></span> 
         
        </div>
      </nav>
      <aside>
        <p className="font-medium ">Copyright © 2023 - All right reserved by Theme Forest</p>
      </aside>
    </footer>
  );
};

export default Footer;

