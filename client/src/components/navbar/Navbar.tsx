import "./Navbar.css";
function Navbar() {
  return (
    <header className="header-nav">
      <nav className="whole-nav">
        <h2 className="nav-title">Timothey Mesmacque</h2>
        <ul className="nav-list">
          <li>
            <a href="#parcours">Mon parcours</a>
          </li>
          <li>Mes projets</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
