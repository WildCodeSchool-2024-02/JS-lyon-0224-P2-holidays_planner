import HomeBody from "./HomeBody";
import Button from "./Button";
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div className={styles.divClass}>
      <HomeBody />
      <Button />
    </div>
  );
}

export default HomePage;
