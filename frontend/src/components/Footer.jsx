import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm"> 
        <div>
            <img className="mb-5 w-40" src={assets.logo} alt="" /> 
            <p className="w-full md:w-2/3 text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus esse et aliquid itaque neque. Dolorum eum est illum. Sed minima temporibus amet delectus consequatur laborum repellat magni nisi asperiores!
            </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">
                Company
            </p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600"
            >
                <li>+91 9380508630</li>
                <li>shreyassnhere@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Made with Love by Shreyas S N</p>
      </div>
    </div>
  );
};

export default Footer;
