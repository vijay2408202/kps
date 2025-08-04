import React from "react";

const Button = ({ styles }) => (
  <a href="#contact" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:bg-white transition-all duration-300 inline-block text-center ${styles}`}>
    Get Quote
  </a>
);

export default Button;
