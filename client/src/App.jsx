import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.commonDesign}>
        <Link to="/">Home</Link>
        <Link to="/filtercountry">FilterCountry</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/aboutus">AboutUs</Link>
      </nav>
      <body className={styles.body}>
        <Outlet />
      </body>
    </>
  );
}

export default App;
