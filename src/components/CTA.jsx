import styles from "../style";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Ready to Secure Your Property?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get professional security services from Krishna Protection Security.
        With 20+ years of experience, we provide reliable and trusted security solutions across Kolkata.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 flex-col sm:flex-row gap-4`}>
      <a href="tel:+919748025247" className="bg-blue-gradient font-poppins font-medium text-[18px] text-primary px-8 py-4 rounded-[10px] hover:bg-white transition-all duration-300">
        Call Now
      </a>
      <a href="#contact" className="border-2 border-blue-gradient font-poppins font-medium text-[18px] text-white px-8 py-4 rounded-[10px] hover:bg-blue-gradient hover:text-primary transition-all duration-300">
        Get Quote
      </a>
    </div>
  </section>
);

export default CTA;
