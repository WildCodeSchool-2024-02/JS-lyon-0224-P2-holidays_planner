import styles from "./calender.module.css";
import Header from "../Common/Navbar/Header";
import Footer from "../Common/Footer/Footer";
import CalenderSearch from "./CalenderSearch/CalenderSearch";
import CalenderResult from "./CalenderResult/CalenderResult";

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
