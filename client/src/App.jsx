import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/filtercountry">FilterCountry</Link>
        <Link to="/calender">Calender</Link>
        <Link to="/aboutus">AboutUs</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
