import styles from "../style";
import { discount, hero } from "../assets";
import GetStarted from "./GetStarted";
import { useScrollAnimation } from "../hooks/useCountAnimation";

const Hero = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);

  return (
    <section ref={elementRef} id="home" className={`flex md:flex-row flex-col ${styles.paddingY} min-h-screen md:min-h-0`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
        <div className="flex flex-row items-center py-2 sm:py-[6px] px-3 sm:px-4 bg-gray-800 dark:bg-gray-800 rounded-[8px] sm:rounded-[10px] mb-4 sm:mb-2 border border-gray-600 w-fit transform transition-all duration-500 hover:scale-105">
          <img src={discount} alt="discount" className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]" />
          <p className={`font-poppins font-normal text-gray-200 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[30.8px] ml-2`}>
            <span className="text-blue-400">20+</span> Years of{" "}
            <span className="text-blue-400">Trusted</span> Service
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[32px] xs:text-[40px] sm:text-[52px] ss:text-[72px] text-gray-900 dark:text-white leading-[40px] xs:leading-[50px] sm:leading-[65px] ss:leading-[100.8px]">
            Krishna <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Protection</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold text-[32px] xs:text-[40px] sm:text-[52px] ss:text-[68px] text-gray-900 dark:text-white leading-[40px] xs:leading-[50px] sm:leading-[65px] ss:leading-[100.8px] w-full">
          Security Services
        </h1>
        <p className={`font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] leading-[22px] xs:leading-[26px] sm:leading-[30.8px] max-w-full sm:max-w-[470px] mt-4 sm:mt-5`}>
          Professional & Reliable Security Guard Services. With 20+ years of experience, we provide trusted security solutions for businesses, events, and properties across Kolkata.
        </p>

        <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mt-6 sm:mt-8 w-full xs:w-auto">
          <a href="tel:+919748025247" className="bg-blue-600 dark:bg-blue-gradient font-poppins font-medium text-[14px] xs:text-[16px] sm:text-[18px] text-white dark:text-primary outline-none px-4 xs:px-6 py-3 xs:py-4 rounded-[8px] sm:rounded-[10px] hover:bg-blue-700 dark:hover:bg-white dark:hover:text-primary transition-all duration-300 text-center transform hover:scale-105">
            <span className="xs:hidden">Call: +91 97480 25247</span>
            <span className="hidden xs:inline">Call Now: +91 97480 25247</span>
          </a>
          <button className="border-2 border-blue-600 dark:border-blue-gradient font-poppins font-medium text-[14px] xs:text-[16px] sm:text-[18px] text-blue-600 dark:text-white outline-none px-4 xs:px-6 py-3 xs:py-4 rounded-[8px] sm:rounded-[10px] hover:bg-blue-600 hover:text-white dark:hover:bg-blue-gradient dark:hover:text-primary transition-all duration-300 text-center transform hover:scale-105">
            Get Quote
          </button>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-6 sm:my-10 relative order-first md:order-last transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
        <img src={hero} alt="security hero" className="w-[80%] xs:w-[90%] sm:w-[100%] h-[80%] xs:h-[90%] sm:h-[100%] relative z-[5] scale-x-[-1] transform transition-all duration-500 hover:scale-105" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient animate-pulse" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-20 sm:bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-10 sm:right-20 bottom-10 sm:bottom-20 blue__gradient animate-pulse delay-300" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-6 sm:mt-0`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
