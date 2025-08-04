import { whyChooseUs } from "../constants";
import styles, { layout } from "../style";

const ReasonCard = ({ icon, title, description, index }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-[20px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className={`w-[80px] h-[80px] rounded-full ${styles.flexCenter} bg-blue-100 dark:bg-dimBlue mb-4`}>
      <img src={icon} alt={title} className="w-[60%] h-[60%] object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-[20px] leading-[26px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[16px] leading-[24px]">
      {description}
    </p>
  </div>
);

const Billing = () => (
  <section id="why-choose-us" className="py-16 px-6 sm:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Header Section - Centered */}
      <div className="text-center mb-16">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 dark:text-white xs:leading-[76.8px] leading-[66.8px] mb-6">
          Why Choose <span className="text-gradient">Krishna Protection</span>?
        </h2>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[800px] mx-auto mb-4">
          With two decades of experience in the security industry, we have built a reputation for excellence, reliability, and professionalism. Our comprehensive approach ensures complete peace of mind for our clients.
        </p>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[800px] mx-auto">
          We serve all over Kolkata with a team of verified, trained, and uniformed security personnel who are committed to providing the highest level of service.
        </p>
      </div>

      {/* Features Grid - Centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {whyChooseUs.map((reason, index) => (
          <ReasonCard key={reason.id} {...reason} index={index} />
        ))}
      </div>

      {/* Call-to-Action Section - Centered */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-[20px] border border-blue-200 dark:border-gray-600 inline-block">
          <h3 className="font-poppins font-semibold text-[24px] text-gray-900 dark:text-white mb-4">
            Ready to Secure Your Property?
          </h3>
          <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[16px] mb-6 max-w-[400px]">
            Contact us now for professional security services across Kolkata
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-blue-600 dark:bg-blue-gradient text-white dark:text-primary font-poppins font-semibold text-[16px] py-3 px-8 rounded-[10px] text-center">
              Serving All Over Kolkata
            </div>
            <div className="border-2 border-blue-600 dark:border-blue-gradient text-blue-600 dark:text-white font-poppins font-medium text-[16px] py-3 px-8 rounded-[10px] text-center">
              Professional & Reliable
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
