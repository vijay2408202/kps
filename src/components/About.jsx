import styles, { layout } from "../style";
import Button from "./Button";
import about from "../assets/about.jpg";

const Business = () => (
  <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Header Section - Centered */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-poppins font-semibold text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] text-gray-900 dark:text-white leading-[36px] xs:leading-[40px] sm:leading-[50px] lg:leading-[60px] mb-4 sm:mb-6">
          About <span className="text-gradient">Krishna Protection</span> <br className="hidden sm:block" />
          <span className="block sm:inline">Security</span>
        </h2>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[32px] max-w-full sm:max-w-[600px] lg:max-w-[800px] mx-auto px-2 sm:px-0">
          Your trusted security partner for over two decades
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
        {/* Left Side - Image */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative">
            <div className="w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-2xl">
              <img src={about} alt="About Krishna Protection Security" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] bg-blue-600 rounded-full opacity-15"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-left order-2 lg:order-2 px-2 sm:px-0">
          <div className="mb-6 sm:mb-8">
            <h3 className="font-poppins font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-gray-900 dark:text-white mb-3 sm:mb-4">
              20+ Years of Excellence
            </h3>
            <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[30px] mb-4 sm:mb-6">
              With over 20 years of dedicated service in the security industry, Krishna Protection Security has established itself as a trusted name in Kolkata. We specialize in providing reliable, professional security services with emphasis on trained personnel, vigilance, and complete customer satisfaction.
            </p>
            <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[30px] mb-6 sm:mb-8">
              Our commitment to excellence and continuous improvement has made us the preferred choice for businesses, institutions, and individuals seeking comprehensive security solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center bg-blue-50 dark:bg-gray-800 py-4 sm:py-6 px-3 sm:px-4 rounded-[12px] sm:rounded-[16px]">
              <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-blue-600 dark:text-blue-400">20+</h4>
              <p className="font-poppins text-gray-600 dark:text-dimWhite text-[12px] sm:text-[14px]">Years Experience</p>
            </div>
            <div className="text-center bg-blue-50 dark:bg-gray-800 py-4 sm:py-6 px-3 sm:px-4 rounded-[12px] sm:rounded-[16px]">
              <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-blue-600 dark:text-blue-400">500+</h4>
              <p className="font-poppins text-gray-600 dark:text-dimWhite text-[12px] sm:text-[14px]">Happy Clients</p>
            </div>
            <div className="text-center bg-blue-50 dark:bg-gray-800 py-4 sm:py-6 px-3 sm:px-4 rounded-[12px] sm:rounded-[16px]">
              <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-blue-600 dark:text-blue-400">200+</h4>
              <p className="font-poppins text-gray-600 dark:text-dimWhite text-[12px] sm:text-[14px]">Security Personnel</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Button styles="inline-block" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Business;
