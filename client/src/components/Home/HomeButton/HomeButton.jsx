import { Link } from "react-router-dom";
import styles from "./homebutton.module.css";

function HomeButton() {
  return (
    <div className={styles.homeButtons}>
      <Link to="/filtercountry">
        <button type="button">Filter by Country</button>
      </Link>
      <Link to="/calendar">
        <button type="button">Filter by Date</button>
      </Link>
      <Link to="/aboutus">
        <button type="button">AboutUs</button>
      </Link>
    </div>
  );
}

export default HomeButton;
