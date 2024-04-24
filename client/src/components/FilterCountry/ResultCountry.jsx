import PropTypes from "prop-types";
import styles from "./resultcountry.module.css";

function ResultCountry({ holidays }) {
  return (
    <section className={styles.resultPage}>
      <p className={styles.title}>Public holidays for the next 365 days</p>
      <div className={styles.result}>
        {holidays.map((holiday) => (
          <div key={holiday.date}>
            <p className={styles.results}>
              {holiday.date}
              {holiday.name}
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
