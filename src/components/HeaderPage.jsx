import { NavLink } from "react-router-dom";

function HeaderPage() {

  let activeStyle = {
    textDecoration: "underline",
    color: '#2fd4fe'
  };

  return (
    <aside>
      <img src="/logo.png" alt="Jimena Martin Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="repo">
        <h3>Repo Github</h3>
        <a href="https://github.com/jimenaleom/jimena.ca-react"> Github Repo Here </a>
      </div>
    </aside>
  );
}

export default HeaderPage;
