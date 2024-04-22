import { Link } from "react-router-dom";
import styles from "./button.module.css";

function Button() {
  return (
    <div className={styles.flexHomebuttons}>
      <Link to="/filtercountry">
        <button type="button" className={styles.button}>
          Filter Country
        </button>
      </Link>
    </div>
  );
}

export default Button;
