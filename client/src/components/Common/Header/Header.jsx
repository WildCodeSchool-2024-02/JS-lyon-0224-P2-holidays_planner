import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../../assets/images/logo-lazy-day.png";

function Header() {
  return (
    <nav className={styles.navBar}>
      <img src={logo} alt="logo lazy day" className={styles.logo} />
      <ul className={styles.navBarLinks}>
        <li>
          <Link className={styles.navBarLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navBarLink} to="/filtercountry">
            Filter By Country
          </Link>
        </li>
        <li>
          <Link className={styles.navBarLink} to="/filtercountryyear">
            Filter By Year and Country
          </Link>
        </li>
        <li>
          <Link className={styles.navBarLink} to="/aboutus">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
