import PropTypes from "prop-types";
import styles from "./resultcountry.module.css";

function ResultCountry({ holidays }) {
  return (
    <section className={styles.resultPage}>
      <div className={styles.resultDate}>
        {holidays.map((holiday, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={holiday.date + index}>
            <p className={styles.results}>{holiday.date}{holiday.name}</p>
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
