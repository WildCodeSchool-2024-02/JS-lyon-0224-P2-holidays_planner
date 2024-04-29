import { Link } from "react-router-dom";
import styles from "./homebutton.module.css";

function HomeButton() {
  return (
    <div className={styles.homeButtons}>
      <Link to="/filtercountry">
        <button type="button" className={styles.button}>
          Filter Country
        </button>
      </Link>
      <Link to="/calendar">
        <button type="button" className={styles.button}>
          Filter Period
        </button>
      </Link>
      <Link to="/calendar">
        <button type="button" className={styles.button}>
          Calendar
        </button>
      </Link>
    </div>
  );
}

export default HomeButton;
