import styles from "./header.module.css";
import logo from "../../../assets/images/logo-lazy-day.png";

function Header() {
  return (
    <nav className={styles.navBar}>
      <div>
        <img src={logo} alt="logo lazy day" />
      </div>
      <ul className={styles.navBarLinks}>
        <li className={styles.navBarLink}>A mettre balise link ici + Home</li>
        <li className={styles.navBarLink}>A mettre balise FC link ici</li>
        <li className={styles.navBarLink}>calendar</li>
        <li className={styles.navBarLink}>about us</li>
      </ul>
    </nav>
  );
}

export default Header;
