import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-blue-100 dark:bg-gray-800 rounded-[10px] mb-2 border border-blue-200 dark:border-gray-600">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`font-poppins font-normal text-gray-700 dark:text-gray-200 text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-blue-600 dark:text-blue-400">20+</span> Years of{" "}
            <span className="text-blue-600 dark:text-blue-400">Trusted</span> Service
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-900 dark:text-white ss:leading-[100.8px] leading-[75px]">
            Krishna <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Protection</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-gray-900 dark:text-white ss:leading-[100.8px] leading-[75px] w-full">
          Security Services
        </h1>
        <p className={`font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          Professional & Reliable Security Guard Services. With 20+ years of experience, we provide trusted security solutions for businesses, events, and properties across Kolkata.
        </p>

        <div className="flex flex-row gap-4 mt-8">
          <a href="tel:+919748025247" className="bg-blue-600 dark:bg-blue-gradient font-poppins font-medium text-[18px] text-white dark:text-primary outline-none px-6 py-4 rounded-[10px] hover:bg-blue-700 dark:hover:bg-white dark:hover:text-primary transition-all duration-300">
            Call Now: +91 97480 25247
          </a>
          <button className="border-2 border-blue-600 dark:border-blue-gradient font-poppins font-medium text-[18px] text-blue-600 dark:text-white outline-none px-6 py-4 rounded-[10px] hover:bg-blue-600 hover:text-white dark:hover:bg-blue-gradient dark:hover:text-primary transition-all duration-300">
            Get Quote
          </button>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
