import PropTypes from "prop-types";
import styles from "./resultcountry.module.css";

function ResultCountry({ holidays }) {
  return (
    <section className={styles.partResult}>
      <div className={styles.resultDate}>
        <p className={styles.date}>Date</p>
        {holidays.map((holiday, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={holiday.date + index}>
            <p className={styles.resultsDate}>{holiday.date}</p>
          </div>
        ))}
      </div>
      <div className={styles.resultName}>
        <p className={styles.name}>Name</p>
        {holidays.map((holiday, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={holiday.name + index}>
            <p className={styles.resultsName}>{holiday.name}</p>
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
