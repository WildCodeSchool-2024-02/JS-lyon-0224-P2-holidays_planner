import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import styles from "./App.module.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`app ${darkMode && "dark-theme"}`}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
