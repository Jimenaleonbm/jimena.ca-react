import { NavLink } from "react-router-dom";

function HeaderPage() {

  let activeStyle = {
    textDecoration: "underline",
    color: '#37a9ff'
  };

  return (
    <aside>
      <div>
        <img src="/logo.png" alt="Jimena Martin Logo" className="logo" />
        <div className="name">
          <h2>Jimena Martin</h2>
          <p>Front end developer / UI designer</p>
        </div>
      </div>
      <nav>
        <ul className="mainMenu">
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
              to="/portfolio"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Portfolio
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
              to="/contact"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="bottom">
        <div className="social">
          <ul>
            <li><img src="/img/linkedin.png" alt="linkedin" /></li>
            <li><img src="/img/github.png" alt="github" /></li>
            <li><img src="/img/behance.png" alt="behance" /></li>
            <li><img src="/img/email.png" alt="email" /></li>
          </ul>
        </div>
        <div className="email">jimenaleonbm@gmail.com</div>
        <p className="copy">© JimenaMartin 2022</p>
      </div>
    </aside>
  );
}

export default HeaderPage;
