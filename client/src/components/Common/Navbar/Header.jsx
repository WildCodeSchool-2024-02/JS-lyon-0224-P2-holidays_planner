import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarLinks}>
        <li className={styles.navBarLink}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to="/filtercountry">FilterCountry</Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to="/aboutus">AboutUs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
