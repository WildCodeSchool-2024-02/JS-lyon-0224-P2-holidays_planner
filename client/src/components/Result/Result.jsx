import PropTypes from "prop-types";
import styles from "./result.module.css";

function Result({ holidays }) {
  return (
    <section className={styles.resultPage}>
      <div>
        {holidays.map((holiday) => (
          <div key={holiday.date}>
            {holiday.date} - {holiday.name} - {holiday.localName}
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
