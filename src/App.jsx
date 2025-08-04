import styles from "./style";
import { WhyChooseUs, About, Contact, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Services, Gallery } from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => (
  <ThemeProvider>
    <div className="theme-main-bg w-full overflow-hidden transition-all duration-500">
      <div className={`theme-hero-bg ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`theme-hero-bg ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`theme-hero-bg ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <Gallery />
          <WhyChooseUs />
          <Contact />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </ThemeProvider>
);

export default App;
