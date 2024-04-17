import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.commonDesign}>
        <Link to="/">Home</Link>
        <Link to="/filtercountry">FilterCountry</Link>
        <Link to="/calender">Calender</Link>
        <Link to="/aboutus">AboutUs</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
