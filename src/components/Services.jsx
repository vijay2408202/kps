import { services } from "../constants";
import styles, { layout } from "../style";

const ServiceCard = ({ icon, title, description, index }) => (
    <div className={`flex flex-col p-6 rounded-[20px] ${index !== services.length - 1 ? "mb-6" : "mb-0"} bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-lg dark:hover:bg-gray-800 transition-all duration-300`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue-100 dark:bg-dimBlue mb-4`}>
            <img src={icon} alt="service" className="w-[50%] h-[50%] object-contain" />
        </div>
        <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-[18px] leading-[23.4px] mb-2">
            {title}
        </h4>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[16px] leading-[24px]">
            {description}
        </p>
    </div>
);

const Services = () => (
    <section id="services" className={layout.section}>
        <div className="w-full">
            <div className="text-center mb-16">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 dark:text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center">
                    Our <span className="text-gradient">Security</span> Services
                </h2>
                <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mx-auto mt-5">
                    Comprehensive security solutions tailored for various industries and requirements.
                    From executive protection to event security, we've got you covered with professional services.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} {...service} index={index} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-[24px] mb-8">
                    Service Areas Include:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🏢</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Apartments</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🏬</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Offices & Malls</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">☕</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Cafés & Restaurants</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🎓</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Schools & Colleges</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🏥</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Hospitals</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🏗️</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Construction Sites</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🎪</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Events & Exhibitions</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-[12px] border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="text-2xl mb-2">🏘️</div>
                        <p className="font-poppins font-medium text-gray-900 dark:text-white text-[14px]">Residential Areas</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
