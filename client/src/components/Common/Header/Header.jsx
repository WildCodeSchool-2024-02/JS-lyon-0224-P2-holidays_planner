import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../../assets/images/logo-lazy-day.png";
import HomeLogo from "../../../assets/images/home.svg";
import EarthLogo from "../../../assets/images/earth.svg";
import CalendarLogo from "../../../assets/images/calendar.svg";
import TeamLogo from "../../../assets/images/team.svg";

function Header() {
  return (
    <nav className={styles.navBar}>
      <Link className={styles.navBarLink} to="/">
        <img src={logo} alt="logo lazy day" className={styles.logo} />
      </Link>
      <ul className={styles.navBarLinks}>
        <li>
          <Link className={styles.navBarLink} to="/">
            <img src={HomeLogo} alt="homelogo" /> Home
          </Link>
        </li>
        <li>
          <Link className={styles.navBarLink} to="/filtercountry">
            <img src={EarthLogo} alt="earthlogo" />
            Filter By Country
          </Link>
        </li>
        <li>
          <Link className={styles.navBarLink} to="/filtercountryyear">
            <img src={CalendarLogo} alt="calendarlogo" />
            Filter By Year and Country
          </Link>
        </li>
        <li>
          <Link className={styles.navBarLink} to="/aboutus">
            <img src={TeamLogo} alt="teamlogo" />
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
