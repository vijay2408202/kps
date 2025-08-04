import styles from "../style";
import { useScrollAnimation } from "../hooks/useCountAnimation";

const CTA = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`${styles.flexCenter} ${styles.marginY} px-4 sm:px-6 lg:${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[40px] sm:leading-[50px] lg:leading-[76.8px] w-full`}>
          Ready to Secure Your Property?
        </h2>
        <p className={`font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30.8px] text-dimWhite max-w-[400px] lg:max-w-[470px] mt-3 sm:mt-4 lg:mt-5`}>
          Get professional security services from Krishna Protection Security.
          With 20+ years of experience, we provide reliable and trusted security solutions across Kolkata.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-6 lg:ml-10 ml-0 sm:mt-0 mt-6 lg:mt-10 flex-col sm:flex-row gap-3 lg:gap-4`}>
        <a href="tel:+919748025247" className="bg-blue-gradient font-poppins font-medium text-[16px] lg:text-[18px] text-primary px-6 lg:px-8 py-3 lg:py-4 rounded-[10px] hover:bg-white transition-all duration-300 w-full sm:w-auto text-center">
          Call Now
        </a>
        <a href="#contact" className="border-2 border-blue-gradient font-poppins font-medium text-[16px] lg:text-[18px] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-[10px] hover:bg-blue-gradient hover:text-primary transition-all duration-300 w-full sm:w-auto text-center">
          Get Quote
        </a>
      </div>
    </section>
  );
};

export default CTA;
