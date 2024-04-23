import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import travel from "../../../assets/images/travel.png";

function Footer() {
  return (
    <div>
      <p className={styles.footerText}>
        <img src={travel} alt="Travel_logo_footer" />
        By Holidays Planner
      </p>
      <Link to="/aboutus">
        <p className={styles.footerAboutUs}>About Us</p>
      </Link>
    </div>
  );
}

export default Footer;
