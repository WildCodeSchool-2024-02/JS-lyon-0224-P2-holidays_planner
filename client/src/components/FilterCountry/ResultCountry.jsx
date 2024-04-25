import PropTypes from "prop-types";
import styles from "./resultcountry.module.css";

function ResultCountry({ holidays }) {
  return (
    <section className={styles.resultPage}>
      <p className={styles.title}>Public holidays for the next 365 days</p>
      <div className={styles.results}>
        {holidays.map((holiday) => (
          <div key={holiday.date} className={styles.holiday}>
            <p className={styles.results}>
              <span className={styles.date}>{holiday.date}</span>
              <br />
              <span className={styles.name}>{holiday.name}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

ResultCountry.propTypes = {
  holidays: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultCountry;
