import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Add your styling here

function NavBar() {
  return (
    <div className="navbar">  {/* Wrap the content with a div and class "navbar" */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/directors">Directors</NavLink>
          </li>
          <li>
            <NavLink to="/actors">Actors</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
