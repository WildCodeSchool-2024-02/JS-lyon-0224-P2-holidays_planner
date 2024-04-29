import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../../assets/images/logo-lazy-day.png";
import HomeLogo from "../../../assets/images/home.svg";
import EarthLogo from "../../../assets/images/earth.svg";
import CalendarLogo from "../../../assets/images/calendar.svg";
import TeamLogo from "../../../assets/images/team.svg";
import Burger from "../../../assets/images/burger.svg";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={styles.navBar}>
      <Link className={styles.navBarLink} to="/">
        <img src={logo} alt="logo lazy day" className={styles.logo} />
      </Link>
      {(!!toggleMenu === true || !!screenWidth === true > 430) && (
        <ul className={styles.navBarLinks}>
          <li>
            <Link className={styles.navBarLink} to="/">
              <img src={HomeLogo} alt="home logo" /> Home
            </Link>
          </li>
          <li>
            <Link className={styles.navBarLink} to="/filtercountry">
              <img src={EarthLogo} alt="earth logo" />
              Filter By Country
            </Link>
          </li>
          <li>
            <Link className={styles.navBarLink} to="/filtercountryyear">
              <img src={CalendarLogo} alt="calendar logo" />
              Filter By Country and Year
            </Link>
          </li>
          <li>
            <Link className={styles.navBarLink} to="/aboutus">
              <img src={TeamLogo} alt="team logo" />
              About Us
            </Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} type="button" className={styles.button}>
        <img src={Burger} alt="burger" />
      </button>
    </nav>
  );
}

export default Header;
