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
            {/**
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
             */}
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
            {/**
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
             */}
            <li>
                <a target="_blank"
                href="https://firebasestorage.googleapis.com/v0/b/jimenamartin-6725e.appspot.com/o/BriyitJimenaMartin.pdf?alt=media&token=d0c614c8-7bfb-4673-855d-d46fab165db3">
                Resume
                </a>
            </li>
            </ul>
        </nav>
        <div className="bottom">
            <div className="social">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/jimena-martin-leon/" target="_blank">
                        <img src="/img/linkedin.png" alt="linkedin" />    
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jimenaleom" target="_blank">
                        <img src="/img/github.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/jimenaleonbm" target="_blank">
                        <img src="/img/behance.png" alt="behance" />
                    </a>
                </li>
                <li>
                    <a href="mailto:jimenaleonbm@gmail.com">
                        <img src="/img/email.png" alt="email" />
                    </a>
                </li>
            </ul>
            </div>
            <div className="email">jimenaleonbm@gmail.com</div>
            <p className="copy">© JimenaMartin 2022</p>
        </div>
    </aside>
  );
}

export default HeaderPage;
