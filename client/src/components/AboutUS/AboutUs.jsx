import styles from "./aboutus.module.css";
import Header from "../Common/Navbar/Header";
import AboutUsMain from "./Main/AboutUsMain";
import Footer from "../Common/Footer/Footer";

function AboutUs() {
  return (
    <div className={styles.abouUsGlobal}>
      <Header />
      <AboutUsMain />
      <Footer />
    </div>
  );
}

export default AboutUs;
