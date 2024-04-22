import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <div className={styles.main}>
    <Header />
    <div className={styles.globalCss}>
      <Outlet />
    </div>
    <Footer />
  </div>
);
}

export default App;
