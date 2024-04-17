import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Common/Navbar/Header";
import Footer from "../Common/Footer/Footer";
import CalendarResult from "./CalendarResult/CalendarResult";
import styles from "./calender.module.css";

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className={styles.divClass}>
      <Header />
      <h2>Calendar</h2>
      <Calendar onChange={onChange} value={date} locale="en-UK" />
      <CalendarResult />
      <Footer />
    </div>
  );
}

export default CalendarComponent;
