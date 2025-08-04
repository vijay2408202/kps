import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { shield } from "../assets";
import about from "../assets/about.jpg";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className={`w-[80px] h-[80px] rounded-full ${styles.flexCenter} bg-blue-100 dark:bg-dimBlue mb-4`}>
      <img src={icon} alt={title} className="w-[60%] h-[60%] object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-[20px] leading-[26px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[16px] leading-[24px]">
      {content}
    </p>
  </div>
);

const Business = () => (
  <section id="about" className="py-16 px-6 sm:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Header Section - Centered */}
      <div className="text-center mb-16">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 dark:text-white xs:leading-[76.8px] leading-[.8px] mb-6">
          About <span className="text-gradient">Krishna Protection</span> <br /> Security
        </h2>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[20px] leading-[32px] max-w-[800px] mx-auto">
          Your trusted security partner for over two decades
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Side - Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-[400px] h-[400px] rounded-[20px] overflow-hidden shadow-2xl">
              <img src={about} alt="About Krishna Protection Security" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-[60px] h-[60px] bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-[80px] h-[80px] bg-blue-600 rounded-full opacity-15"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-left">
          <div className="mb-8">
            <h3 className="font-poppins font-bold text-[32px] text-gray-900 dark:text-white mb-4">
              20+ Years of Excellence
            </h3>
            <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30px] mb-6">
              With over 20 years of dedicated service in the security industry, Krishna Protection Security has established itself as a trusted name in Kolkata. We specialize in providing reliable, professional security services with emphasis on trained personnel, vigilance, and complete customer satisfaction.
            </p>
            <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30px] mb-8">
              Our commitment to excellence and continuous improvement has made us the preferred choice for businesses, institutions, and individuals seeking comprehensive security solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h4 className="font-poppins font-bold text-[28px] text-blue-600 dark:text-blue-400">20+</h4>
              <p className="font-poppins text-gray-600 dark:text-dimWhite text-[14px]">Years Experience</p>
            </div>
            <div className="text-center">
              <h4 className="font-poppins font-bold text-[28px] text-blue-600 dark:text-blue-400">500+</h4>
              <p className="font-poppins text-gray-600 dark:text-dimWhite text-[14px]">Happy Clients</p>
            </div>
            <div className="text-center">
              <h4 className="font-poppins font-bold text-[28px] text-blue-600 dark:text-blue-400">200+</h4>
              <p className="font-poppins text-gray-600 dark:text-dimWhite text-[14px]">Security Personnel</p>
            </div>
          </div>

          <Button styles="inline-block" />
        </div>
      </div>

      {/* Features Section - Centered Grid */}
      <div className="text-center mb-12">
        <h3 className="font-poppins font-semibold text-[32px] text-gray-900 dark:text-white mb-4">
          Why Choose Us?
        </h3>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] max-w-[600px] mx-auto">
          Our core strengths that make us the leading security service provider in Kolkata
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
