import styles from "./home.module.css";
import HomeHeader from "./HomeHeader/HomeHeader";
import Title from "./Homemain/Title";
import HomeButton from "./HomeButton/HomeButton";
import Footer from "../Common/Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";

function Home() {
  return (
    <div className={styles.homePage}>
      <HomeHeader />
      <Title />
      <HomeButton />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
