import styles from "./home.module.css";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeButton from "./HomeButton/HomeButton";
import Footer from "../Common/Footer/Footer";
import HomeTitle from "./Homemain/Title";

function Home() {
  return (
    <div className={styles.homepageGlobal}>
      <HomeHeader />
      <HomeTitle />
      <HomeButton />
      <Footer />
    </div>
  );
}

export default Home;
