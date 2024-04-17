import styles from "./aboutus.module.css";
import Header from "../../Common/Navbar/Header";
import Footer from "../../Common/Footer/Footer";

function AboutUsMain() {
  return (
    <div className={styles.divClass}>
      <Header />
      <p>AboutUsmain</p>
      <Footer />
    </div>
  );
}

export default AboutUsMain;
