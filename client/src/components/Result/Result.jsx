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

export default Result;
