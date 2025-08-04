import { whyChooseUs } from "../constants";
import styles, { layout } from "../style";

const ReasonCard = ({ icon, title, description, index }) => (
  <div className="flex flex-col items-center text-center p-4 sm:p-5 lg:p-6 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className={`w-[60px] h-[60px] xs:w-[70px] xs:h-[70px] sm:w-[80px] sm:h-[80px] rounded-full ${styles.flexCenter} bg-blue-100 dark:bg-dimBlue mb-3 sm:mb-4`}>
      <img src={icon} alt={title} className="w-[60%] h-[60%] object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-[16px] xs:text-[18px] sm:text-[20px] leading-[20px] xs:leading-[24px] sm:leading-[26px] mb-2 sm:mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[12px] xs:text-[14px] sm:text-[16px] leading-[18px] xs:leading-[22px] sm:leading-[24px]">
      {description}
    </p>
  </div>
);

const Billing = () => (
  <section id="why-choose-us" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Header Section - Centered */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-poppins font-semibold text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] text-gray-900 dark:text-white leading-[36px] xs:leading-[40px] sm:leading-[50px] lg:leading-[76.8px] mb-4 sm:mb-6">
          Why Choose <span className="text-gradient">Krishna Protection</span>?
        </h2>
        <div className="px-2 sm:px-0">
          <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] leading-[22px] xs:leading-[26px] sm:leading-[30.8px] max-w-full sm:max-w-[800px] mx-auto mb-3 sm:mb-4">
            With two decades of experience in the security industry, we have built a reputation for excellence, reliability, and professionalism. Our comprehensive approach ensures complete peace of mind for our clients.
          </p>
          <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] leading-[22px] xs:leading-[26px] sm:leading-[30.8px] max-w-full sm:max-w-[800px] mx-auto">
            We serve all over Kolkata with a team of verified, trained, and uniformed security personnel who are committed to providing the highest level of service.
          </p>
        </div>
      </div>

      {/* Features Grid - Centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
        {whyChooseUs.map((reason, index) => (
          <ReasonCard key={reason.id} {...reason} index={index} />
        ))}
      </div>

      {/* Call-to-Action Section - Centered */}
      <div className="text-center px-2 sm:px-0">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 lg:p-8 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] border border-blue-200 dark:border-gray-600 max-w-full sm:inline-block">
          <h3 className="font-poppins font-semibold text-[18px] xs:text-[20px] sm:text-[24px] text-gray-900 dark:text-white mb-3 sm:mb-4">
            Ready to Secure Your Property?
          </h3>
          <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[15px] sm:text-[16px] mb-4 sm:mb-6 max-w-full sm:max-w-[400px] mx-auto">
            Contact us now for professional security services across Kolkata
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <div className="bg-blue-600 dark:bg-blue-gradient text-white dark:text-primary font-poppins font-semibold text-[14px] xs:text-[15px] sm:text-[16px] py-2.5 sm:py-3 px-6 sm:px-8 rounded-[8px] sm:rounded-[10px] text-center">
              Serving All Over Kolkata
            </div>
            <div className="border-2 border-blue-600 dark:border-blue-gradient text-blue-600 dark:text-white font-poppins font-medium text-[14px] xs:text-[15px] sm:text-[16px] py-2.5 sm:py-3 px-6 sm:px-8 rounded-[8px] sm:rounded-[10px] text-center">
              Professional & Reliable
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
