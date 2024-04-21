import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <body className={styles.globalCss}>
        <Outlet />
      </body>
      <Footer />
    </>
  );
}

export default App;
