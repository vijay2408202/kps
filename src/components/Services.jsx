import { services } from "../constants";
import styles, { layout } from "../style";

const ServiceCard = ({ icon, title, description, backgroundImage, index }) => {
    return (
        <div
            className="relative group overflow-hidden rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] h-[280px] xs:h-[320px] sm:h-[350px] cursor-pointer"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"></div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5 lg:p-6">
                {/* Top Section - Icon */}
                <div className="flex justify-start">
                    <div className="w-[50px] h-[50px] xs:w-[60px] xs:h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                        <img src={icon} alt="service" className="w-[60%] h-[60%] object-contain filter brightness-0 invert" />
                    </div>
                </div>

                {/* Bottom Section - Content */}
                <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-poppins font-bold text-white text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[22px] leading-[20px] xs:leading-[24px] sm:leading-[26px] lg:leading-[28px] group-hover:text-blue-300 transition-colors duration-300">
                        {title}
                    </h4>
                    <p className="font-poppins font-normal text-white/90 text-[12px] xs:text-[13px] sm:text-[14px] lg:text-[15px] leading-[18px] xs:leading-[20px] sm:leading-[21px] lg:leading-[22px] group-hover:text-white transition-colors duration-300">
                        {description}
                    </p>

                    {/* Call to action button */}
                    <div className="pt-1 sm:pt-2">
                        <div className="inline-flex items-center text-blue-300 font-poppins font-medium text-[12px] sm:text-[13px] lg:text-[14px] group-hover:text-blue-200 transition-colors duration-300">
                            Learn More
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Border effect */}
            <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300"></div>
        </div>
    );
};

const Services = () => (
    <section id="services" className={layout.section}>
        <div className="w-full">
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
                <h2 className="font-poppins font-semibold text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] text-gray-900 dark:text-white leading-[36px] xs:leading-[40px] sm:leading-[50px] lg:leading-[76.8px] w-full text-center">
                    Our <span className="text-gradient">Security</span> Services
                </h2>
                <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] leading-[22px] xs:leading-[26px] sm:leading-[30.8px] max-w-full sm:max-w-[600px] mx-auto mt-4 sm:mt-5 px-2 sm:px-0">
                    Comprehensive security solutions tailored for various industries and requirements.
                    From executive protection to event security, we've got you covered with professional services.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} {...service} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default Services;
