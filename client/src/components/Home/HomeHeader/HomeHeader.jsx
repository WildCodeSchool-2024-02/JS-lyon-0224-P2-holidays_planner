import HolidaysPlannerLogo from "../../../assets/images/logo-lazy-day.svg";
import styles from "./homeheader.module.css";

function HomeHeader() {
  return (
    <div className={styles.divClass}>
      <img
        src={HolidaysPlannerLogo}
        alt="HolidaysPlannerLogo"
        className={styles.logo}
      />
    </div>
  );
}

export default HomeHeader;
