import PropTypes from "prop-types";
import styles from "./resultcountry.module.css";

function ResultCountry({ holidays }) {
  return (
    <section className={styles.resultPage}>
      <p className={styles.title}>Public holidays for the next 365 days</p>
      <div className={styles.results}>
        {holidays.map((holiday, index) => {
          let holidayColor = styles.holiday1;
          if (index % 3 === 0) {
            holidayColor = styles.holiday2;
          } else if (index % 3 === 2) {
            holidayColor = styles.holiday3;
          }
          return (
            <div key={holiday.date} className={(styles.holiday, holidayColor)}>
              <p className={styles.results}>
                <span className={styles.date}>{holiday.date}</span>
                <span className={styles.name}>{holiday.name}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

ResultCountry.propTypes = {
  holidays: PropTypes.arrayOf(
    PropTypes.shape({
      countrycode: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultCountry;
