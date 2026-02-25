import { NavLink } from "react-router-dom";

function HeaderPage() {

  let activeStyle = {
    textDecoration: "underline",
    color: '#37a9ff'
  };

  return (
    <header>
        <div>
            <img src="/logo.png" alt="Jimena Martin Logo" className="logo" />
            <div className="name">
                <div className="name-title">Jimena Martin</div>
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
                Portfolio
                </NavLink>
            </li>
            </ul>
        </nav>
        <div className="bottom">
            <div className="social">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/jimena-martin-leon/" target="_blank" rel="noopener noreferrer" aria-label="Visit Jimena Martin's LinkedIn profile">
                        <img src="/img/linkedin.png" alt="LinkedIn" />    
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jimenaleom" target="_blank" rel="noopener noreferrer" aria-label="Visit Jimena Martin's GitHub profile">
                        <img src="/img/github.png" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/jimenaleonbm" target="_blank" rel="noopener noreferrer" aria-label="Visit Jimena Martin's Behance portfolio">
                        <img src="/img/behance.png" alt="Behance" />
                    </a>
                </li>
                <li>
                    <a href="mailto:jimenaleonbm@gmail.com" aria-label="Send an email to Jimena Martin">
                        <img src="/img/email.png" alt="Email" />
                    </a>
                </li>
            </ul>
            </div>
            <a href="mailto:jimenaleonbm@gmail.com" className="email">
                jimenaleonbm@gmail.com
            </a>
            <p className="copy">© JimenaMartin 2026</p>
        </div>
    </header>
  );
}

export default HeaderPage;
