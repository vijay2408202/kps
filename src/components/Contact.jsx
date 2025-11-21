import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from "../hooks/useCountAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration using environment variables
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email || 'No email provided',
        service_type: formData.service,
        message: formData.message || 'No additional message provided',
        to_email: import.meta.env.VITE_TARGET_EMAIL,
      };

      // Send email using EmailJS with environment variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Security Guards',
    'Security Supervisor',
    'Bouncer',
    'Gunman',
    'Bodyguard',
    'Corporate Security',
    '24×7 CCTV Monitoring',
    'Housing Complex Security'
  ];

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900/30 dark:to-blue-900/20"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-block">
            <h2 className="font-poppins font-bold text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] text-gray-900 dark:text-white leading-[36px] xs:leading-[40px] sm:leading-[50px] lg:leading-[60px] xl:leading-[76.8px] mb-3 sm:mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[20px] leading-[22px] xs:leading-[26px] sm:leading-[30px] lg:leading-[32px] max-w-full sm:max-w-[600px] lg:max-w-[700px] mx-auto mt-6 sm:mt-8 px-2 sm:px-0">
            Ready to secure your property? Contact S3 Group for professional, reliable, and trusted security solutions available 24/7.
          </p>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Contact Cards */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">📞</span>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-poppins font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-dimWhite text-xs sm:text-sm">Contact Person: Suraj Singh</p>
                </div>
              </div>
              <a href="tel:+919330094829" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-poppins font-medium text-[14px] sm:text-[16px] lg:text-[18px] block mb-2">
                +91 93300 94829
              </a>
              <a href="tel:+919060557296" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-poppins font-medium text-[14px] sm:text-[16px] lg:text-[18px] block">
                +91 90605 57296
              </a>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">📍</span>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-poppins font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-dimWhite text-xs sm:text-sm">Our Address</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dimWhite font-poppins font-medium text-[14px] sm:text-base">
                1 AJC Bose Road<br />
                Kolkata 700020<br />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Serving across West Bengal</span>
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl lg:text-2xl">✉️</span>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-poppins font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-dimWhite text-xs sm:text-sm">Quick Response</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-dimWhite font-poppins font-medium text-[12px] xs:text-[13px] sm:text-[14px] lg:text-base break-all">
                {import.meta.env.VITE_TARGET_EMAIL}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 sm:p-6 lg:p-8 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] text-white">
              <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] lg:text-[22px] mb-3 sm:mb-4">🎯 Special Offer</h3>
              <p className="font-poppins text-blue-100 mb-3 sm:mb-4 text-[14px] sm:text-base">FREE CCTV installation & 24×7 monitoring for clients requiring 4+ guards per shift!</p>
              <a href="tel:+919330094829" className="inline-block bg-white/20 hover:bg-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] sm:rounded-[12px] font-poppins font-medium transition-all duration-300 text-[12px] xs:text-[14px] sm:text-base">
                Call Now: +91 93300 94829
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 xl:p-10 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="font-poppins font-bold text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[28px] text-gray-900 dark:text-white mb-2">
                  Request a Quote
                </h3>
                <p className="text-gray-600 dark:text-dimWhite text-[12px] xs:text-[14px] sm:text-base">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2 text-[14px] sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] text-gray-900 dark:text-white font-poppins placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-[14px] sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2 text-[14px] sm:text-base">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] text-gray-900 dark:text-white font-poppins placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-[14px] sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2 text-[14px] sm:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] text-gray-900 dark:text-white font-poppins placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-[14px] sm:text-base"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2 text-[14px] sm:text-base">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] text-gray-900 dark:text-white font-poppins focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-[14px] sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-poppins font-medium text-gray-700 dark:text-gray-300 mb-2 text-[14px] sm:text-base">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your security requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] text-gray-900 dark:text-white font-poppins placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none text-[14px] sm:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-poppins font-semibold text-[14px] xs:text-[16px] sm:text-[18px] py-3 sm:py-4 px-4 sm:px-6 rounded-[10px] sm:rounded-[12px] transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-500 text-green-700 dark:text-green-400 px-3 sm:px-4 py-2 sm:py-3 rounded-[10px] sm:rounded-[12px] font-poppins text-[12px] xs:text-[14px] sm:text-base">
                    ✅ Message sent successfully! We'll contact you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded-[10px] sm:rounded-[12px] font-poppins text-[12px] xs:text-[14px] sm:text-base">
                    ❌ Failed to send message. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
