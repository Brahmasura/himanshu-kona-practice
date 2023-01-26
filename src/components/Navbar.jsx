import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
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
  );
};

export default Navbar;
