import Proptypes from "prop-types";
import styles from "./resultyear.module.css";

function ResultYear({ days }) {
  return (
    <section className={styles.resultPage}>
      <div className={styles.resultDate}>
        {days.map((day) => (
          <div key={day.date}>
            <p className={styles.results}>{day.date}</p>
          </div>
        ))}
      </div>
      <div className={styles.resultDate}>
        {days.map((day) => (
          <div key={day.name}>
            <p className={styles.results}>{day.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

ResultYear.propTypes = {
  days: Proptypes.arrayOf(
    Proptypes.shape({
      date: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultYear;
