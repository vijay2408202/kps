import { stats } from "../constants";
import styles from "../style";
import { useScrollAnimation } from "../hooks/useCountAnimation";

const StatItem = ({ stat }) => {
  return (
    <div className={`flex-1 flex justify-center items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {stat.value}
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        {stat.title}
      </p>
    </div>
  );
};

const Stats = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      {stats.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </section>
  );
};

export default Stats;
