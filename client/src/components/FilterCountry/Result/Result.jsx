import PropTypes from "prop-types";
import styles from "./result.module.css";

function Result({ holidays }) {
  return (
    <section className={styles.resultPage}>
      <div>
        <p className={styles.date}>Date</p>
        {holidays.map((holiday) => (
          <div key={holiday.date}>
            <p className={styles.results}>{holiday.date}</p>
          </div>
        ))}
        <p className={styles.name}>Name</p>
        {holidays.map((holiday) => (
          <div key={holiday.name}>
            <p className={styles.results}>{holiday.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Result.propTypes = {
  holidays: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      localName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Result;
