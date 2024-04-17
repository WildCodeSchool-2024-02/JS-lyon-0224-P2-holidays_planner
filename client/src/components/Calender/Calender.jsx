import styles from "./calendar.module.css";
import Header from "../Common/Navbar/Header";
import Footer from "../Common/Footer/Footer";
import CalenderSearch from "./CalenderSearch/CalenderSearch";
import CalendarResult from "./CalendarResult/CalendarResult";

function Calender() {
  return (
    <div className={styles.divClass}>
      <Header />
      <p>calenderpage</p>
      <CalenderSearch />
      <CalenderResult />
      <Footer />
    </div>
  );
}

export default Calender;
