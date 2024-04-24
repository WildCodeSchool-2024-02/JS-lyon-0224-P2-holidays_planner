import { Link } from "react-router-dom";
import styles from "./button.module.css";

function Button() {
  return (
    <div className={styles.flexHomebuttons}>
      <Link to="/filtercountry">
        <button type="button" className={styles.button}>
          Filter By Country
        </button>
      </Link>
      <Link to="/filtercountryyear">
        <button type="button" className={styles.button}>
          Filter By Year and Country
        </button>
      </Link>
    </div>
  );
}

export default Button;
