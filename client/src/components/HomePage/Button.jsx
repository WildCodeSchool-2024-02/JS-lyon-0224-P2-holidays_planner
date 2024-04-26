import { Link } from "react-router-dom";
import styles from "./button.module.css";

function Button() {
  return (
    <div className={styles.flexHomeButtons}>
      <Link to="/filtercountry">
        <button type="button" className={styles.button}>
          Filter by Country
        </button>
      </Link>
      <Link to="/filtercountryyear">
        <button type="button" className={styles.button}>
          Filter by Country and Year
        </button>
      </Link>
    </div>
  );
}

export default Button;
