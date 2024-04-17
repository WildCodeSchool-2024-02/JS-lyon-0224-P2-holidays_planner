// import styles from "./homebutton.module.css";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <div>
      <Link to="/filtercountry">
        <button type="button">Filter by Country</button>
      </Link>
      <Link to="/calender">
        <button type="button">Filter by Date</button>
      </Link>
      <Link to="/aboutus">
        <button type="button">AboutUs</button>
      </Link>
    </div>
  );
}

export default HomeButton;
