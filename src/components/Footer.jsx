import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col dark:bg-primary`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h2 className="font-poppins font-bold text-gray-800 dark:text-white text-[32px] leading-[40px] mb-4">
          Krishna Protection Security
        </h2>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30px] mt-4 max-w-[312px]">
          Professional & Reliable Security Guard Services. Serving Kolkata with 20+ years of trusted experience in comprehensive security solutions.
        </p>
        <div className="mt-6 space-y-2">
          <p className="text-gray-800 dark:text-white font-poppins">
            📞 <a href="tel:+919748025247" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">+91 97480 25247</a>
          </p>
          <p className="text-gray-600 dark:text-dimWhite font-poppins">📍 Serving All Over Kolkata</p>
          <p className="text-gray-600 dark:text-dimWhite font-poppins">🕒 24/7 Available</p>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-gray-800 dark:text-white mb-4">
            Quick Links
          </h4>
          <ul className="list-none space-y-3">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#services">Services</a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-gray-800 dark:text-white mb-4">
            Our Services
          </h4>
          <ul className="list-none space-y-3">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              Executive Protection
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              Event Security
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              Property Security
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              24/7 Support
            </li>
          </ul>
        </div>

        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-gray-800 dark:text-white mb-4">
            Contact Info
          </h4>
          <ul className="list-none space-y-3">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              Phone: +91 97480 25247
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              Service Area: Kolkata
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600 dark:text-dimWhite">
              Available: 24/7
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-300 dark:border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-700 dark:text-white">
        Copyright © 2024 Krishna Protection Security. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 space-x-4">
        <a href="tel:+919748025247" className="bg-blue-gradient text-white px-4 py-2 rounded-[10px] font-poppins font-medium hover:opacity-90 transition-all duration-300">
          Call Now
        </a>
        <a href="https://wa.me/919748025247" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-[10px] font-poppins font-medium hover:bg-blue-500 hover:text-white transition-all duration-300">
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Footer;
