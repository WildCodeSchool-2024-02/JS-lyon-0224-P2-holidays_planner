import "./header.module.css"

function Header() {
  return (
    <nav className="navigation">
      <ul className="burgerMenu">
        <li>Homepage</li>
        <li>Filter country</li>
        <li>Filter country and period</li>
        <li>Calendar</li>
        <li>About us</li>
      </ul>
    </nav>
  );
}

export default Header;
