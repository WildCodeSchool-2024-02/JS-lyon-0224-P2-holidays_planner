import styles from "./header.module.css";
import Logo from "../../../assets/images/logo-lazy-day.svg";

function Header() {
  return (
    <nav className={styles.navBar}>
      <img src={Logo} alt="logo earth" className={styles.logoPlanet} />
      <ul className={styles.navBarLinks}>
        <li className={styles.navBarItem}>
          <a href="/" className={styles.navBarLink}>
            Homepage
          </a>
        </li>
        <li className={styles.navBarItem}>
          <a href="/" className={styles.navBarLink}>
            Filter country
          </a>
        </li>
        <li className={styles.navBarItem}>
          <a href="/" className={styles.navBarLink}>
            Filter period
          </a>
        </li>
        <li className={styles.navBarItem}>
          <a href="/" className={styles.navBarLink}>
            About us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
