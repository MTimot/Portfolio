import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <header className="header-nav">
      <nav className="whole-nav">
        <Link to="/">
          <h2 className="nav-title">Timothey Mesmacque</h2>
        </Link>
        <ul className="nav-list">
          <Link to="/#parcours">
            <li>Mon parcours</li>
          </Link>
          <Link to="/#projets">
            <li>Mes projets</li>
          </Link>
          <Link to="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
