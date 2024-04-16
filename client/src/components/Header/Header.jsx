import styles from "./header.module.css";
import Logo from "../../assets/images/logo_3.png";

function Header() {
  return (
    <nav className={styles.navBar}>
      <img src={Logo} alt="logo earth" className={styles.logoPlanet} />
      <div className={styles.divClass}>
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
      </div>
    </nav>
  );
}

export default Header;
