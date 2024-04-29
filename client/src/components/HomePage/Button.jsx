import { Link } from "react-router-dom";
import { useDarkBlue } from "../../context/DarkBlueContext";
import styles from "./button.module.css";

function Button() {
  const { darkblue, setDarkBlue } = useDarkBlue();
  function changeDarkBlue() {
    setDarkBlue(!darkblue);
  }

  return (
    <>
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
      <div className={styles.buttonDakrmode}>
        <button
          className={styles.buttonDark}
          type="button"
          onClick={changeDarkBlue}
        >
          Change Dark Mode
        </button>
      </div>
    </>
  );
}

export default Button;
