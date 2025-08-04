import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-2 sm:my-4 lg:my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full gap-2 sm:gap-4 lg:gap-0`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[100px] sm:min-w-[120px] lg:min-w-[192px] m-2 sm:m-3 lg:m-5`}>
          <img
            src={client.logo}
            alt="client_logo"
            className="w-[80px] sm:w-[100px] lg:w-[192px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
