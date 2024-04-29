import { Link } from "react-router-dom";
import styles from "./aboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutUsHome}>
      <Link className={styles.link} to="/aboutus">
        About us
      </Link>
    </div>
  );
}

export default AboutUs;
