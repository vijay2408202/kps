import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} py-8 sm:py-12 lg:${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-6 lg:mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-0 md:mr-6 lg:mr-10 mb-8 md:mb-0">
        <h2 className="font-poppins font-bold text-gray-800 dark:text-white text-[24px] sm:text-[28px] lg:text-[32px] leading-[30px] sm:leading-[35px] lg:leading-[40px] mb-3 lg:mb-4">
          Krishna Protection Security
        </h2>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] mt-2 lg:mt-4 max-w-full lg:max-w-[312px]">
          Professional & Reliable Security Guard Services. Serving Kolkata with 20+ years of trusted experience in comprehensive security solutions.
        </p>
        <div className="mt-4 lg:mt-6 space-y-2">
          <p className="text-gray-800 dark:text-white font-poppins text-[14px] lg:text-[16px]">
            📞 <a href="tel:+919748025247" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">+91 97480 25247</a>
          </p>
          <p className="text-gray-600 dark:text-dimWhite font-poppins text-[14px] lg:text-[16px]">📍 Serving All Over Kolkata</p>
          <p className="text-gray-600 dark:text-dimWhite font-poppins text-[14px] lg:text-[16px]">🕒 24/7 Available</p>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-col sm:flex-row justify-between flex-wrap md:mt-0 mt-6 lg:mt-10 gap-6 sm:gap-4 lg:gap-0">
        <div className="flex flex-col ss:my-0 my-2 lg:my-4 min-w-[140px] lg:min-w-[150px]">
          <h4 className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-gray-800 dark:text-white mb-3 lg:mb-4">
            Quick Links
          </h4>
          <ul className="list-none space-y-2 lg:space-y-3">
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#services">Services</a>
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ss:my-0 my-2 lg:my-4 min-w-[140px] lg:min-w-[150px]">
          <h4 className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-gray-800 dark:text-white mb-3 lg:mb-4">
            Our Services
          </h4>
          <ul className="list-none space-y-2 lg:space-y-3">
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              Executive Protection
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              Event Security
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              Property Security
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              24/7 Support
            </li>
          </ul>
        </div>

        <div className="flex flex-col ss:my-0 my-2 lg:my-4 min-w-[140px] lg:min-w-[150px]">
          <h4 className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-gray-800 dark:text-white mb-3 lg:mb-4">
            Contact Info
          </h4>
          <ul className="list-none space-y-2 lg:space-y-3">
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              Phone: +91 97480 25247
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              Service Area: Kolkata
            </li>
            <li className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-gray-600 dark:text-dimWhite">
              Available: 24/7
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 lg:pt-6 border-t-[1px] border-t-gray-300 dark:border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center md:text-left text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[27px] text-gray-700 dark:text-white mb-4 md:mb-0">
        Copyright © 2024 Krishna Protection Security. All Rights Reserved.
      </p>

      <div className="flex flex-col sm:flex-row md:mt-0 mt-2 lg:mt-6 space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 w-full sm:w-auto">
        <a href="https://wa.me/919748025247" target="_blank" rel="noopener noreferrer" className="bg-blue-gradient text-white px-3 lg:px-4 py-2 rounded-[10px] font-poppins font-medium text-[14px] lg:text-[16px] hover:opacity-90 transition-all duration-300 text-center">
          WhatsApp
        </a>
        <a href="#contact" className="border-2 border-blue-500 text-blue-500 px-3 lg:px-4 py-2 rounded-[10px] font-poppins font-medium text-[14px] lg:text-[16px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-center">
          Get Quote
        </a>
      </div>
    </div>
  </section>
);

export default Footer;
