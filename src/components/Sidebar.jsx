import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <>
             <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
        
          <ul className="navbar-nav">
          <li className="navbar-link">
          <Link className="navbar-brand" to="/">Siderbar</Link>
            </li>
            <li className="navbar-link">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="nav-link" to="/signUp">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        </>
    )

}

export default Sidebar;