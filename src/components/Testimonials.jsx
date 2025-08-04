import { feedback } from "../constants";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-[20px] border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[400px] mx-auto">
    <div className="flex justify-center mb-4 lg:mb-6">
      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
        <img src={quotes} alt="quotes" className="w-[20px] h-[12px] lg:w-[24px] lg:h-[15px] object-contain" />
      </div>
    </div>

    <p className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-gray-700 dark:text-gray-300 text-center mb-6 lg:mb-8 italic">
      "{content}"
    </p>

    <div className="flex items-center justify-center">
      <img src={img} alt={name} className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full object-cover border-2 border-blue-200 dark:border-blue-800" />
      <div className="ml-3 lg:ml-4 text-center">
        <h4 className="font-poppins font-semibold text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] text-gray-900 dark:text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[12px] lg:text-[14px] leading-[18px] lg:leading-[20px] text-gray-600 dark:text-gray-400">
          {title}
        </p>
      </div>
    </div>

    {/* Rating Stars */}
    <div className="flex justify-center mt-3 lg:mt-4 space-x-1">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-yellow-400 text-base lg:text-lg">★</span>
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Header Section - Centered */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-gray-900 dark:text-white leading-[40px] sm:leading-[50px] lg:leading-[76.8px] mb-4 lg:mb-6">
          What Our <span className="text-gradient">Clients</span> Say
        </h2>
        <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[16px] lg:text-[18px] leading-[26px] lg:leading-[30.8px] max-w-[600px] lg:max-w-[800px] mx-auto px-4">
          Don't just take our word for it. Here's what our satisfied clients have to say about Krishna Protection Security's professional services and commitment to excellence.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
        {feedback.map((testimonial) => (
          <FeedbackCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="text-center px-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 lg:p-8 rounded-[20px] border border-blue-200 dark:border-gray-600 inline-block w-full max-w-4xl">
          <h3 className="font-poppins font-semibold text-[20px] lg:text-[24px] text-gray-900 dark:text-white mb-4">
            Trusted by Leading Institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-center">
            <div>
              <h4 className="font-poppins font-bold text-[18px] lg:text-[20px] text-blue-600 dark:text-blue-400">500+</h4>
              <p className="font-poppins text-gray-600 dark:text-gray-400 text-[12px] lg:text-[14px]">Happy Clients</p>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-[18px] lg:text-[20px] text-blue-600 dark:text-blue-400">20+</h4>
              <p className="font-poppins text-gray-600 dark:text-gray-400 text-[12px] lg:text-[14px]">Years Experience</p>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-[18px] lg:text-[20px] text-blue-600 dark:text-blue-400">24/7</h4>
              <p className="font-poppins text-gray-600 dark:text-gray-400 text-[12px] lg:text-[14px]">Support</p>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-[18px] lg:text-[20px] text-blue-600 dark:text-blue-400">100%</h4>
              <p className="font-poppins text-gray-600 dark:text-gray-400 text-[12px] lg:text-[14px]">Reliable</p>
            </div>
          </div>

          <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-blue-200 dark:border-gray-600">
            <p className="font-poppins text-gray-600 dark:text-gray-400 text-[14px] lg:text-[16px] mb-4 px-2">
              Join hundreds of satisfied clients who trust us with their security
            </p>
            <a href="#contact" className="bg-blue-600 dark:bg-blue-gradient text-white dark:text-primary font-poppins font-medium text-[14px] lg:text-[16px] py-2.5 lg:py-3 px-5 lg:px-6 rounded-[10px] hover:bg-blue-700 dark:hover:bg-white dark:hover:text-primary transition-all duration-300 inline-block">
              Get Your Quote Today
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
