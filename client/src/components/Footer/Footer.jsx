import styles from "./footer.module.css";
import travel from "../../assets/images/travel.png";

function Footer() {
  return (
    <div>
      <p className={styles.footerText}>
        <img src={travel} />
        By Holidays Planner
      </p>
    </div>
  );
}

export default Footer;
