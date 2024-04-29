import { Outlet } from "react-router-dom";
import { useDarkBlue, DarkBlueProvider } from "./context/DarkBlueContext";
import styles from "./App.module.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  const { darkblue } = useDarkBlue();
  const appStyles = {
    background:
      !!darkblue === true
        ? "var( --background-gradient-false)"
        : "var(--background-gradient)",
    minHeight: "100vh",
    fontFamily: darkblue ? "PaytoneOne-Regular" : "PaytoneOne-Regular",
  };

  return (
    <div style={appStyles}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <DarkBlueProvider>
      <App />
    </DarkBlueProvider>
  );
}
