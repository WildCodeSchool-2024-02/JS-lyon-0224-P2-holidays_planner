import { Outlet } from "react-router-dom";
import { useDarkBlue, DarkBlueProvider } from "./context/DarkBlueContext";
import "./App.module.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  const { darkblue } = useDarkBlue();

  // Define styles based on darkblue state
  const appStyles = {
    background: darkblue
      ? "var( --background-gradient-false)"
      : "var(--background-gradient)",
    minHeight: "100vh",

    fontFamily: darkblue ? "PaytoneOne-Regular" : "PaytoneOne-Regular",
  };

  return (
    <div style={appStyles}>
      <Header />
      <Outlet />
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
