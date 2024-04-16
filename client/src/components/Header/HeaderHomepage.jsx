import styles from "./HeaderHomepage.module.css";
import Logo from "../../assets/images/logo_3.png";

function HeaderHomepage() {
  return (
    <div>
      <img src={Logo} alt="Lazy Days" className={styles.logo} />
    </div>
  );
}

export default HeaderHomepage;
