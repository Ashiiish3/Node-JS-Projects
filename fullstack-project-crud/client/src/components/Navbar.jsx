import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar() {
  const { user, token } = useSelector((data) => data.auth)
  // const select = useSelector((data) => data.auth)
  // console.log(select)
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand font-weight-bold">
          Home
        </Link>

        <Link to="/notes" className="navbar-brand font-weight-bold">
          Notes
        </Link>
        <Link to={"/create"} className="navbar-brand font-weight-bold">
          <FaPlus />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {
              token ?
                <div className="position-relative d-inline-block text-start">
                  <button
                    onClick={toggleDropdown}
                    className="btn btn-link p-0 border-0"
                    aria-expanded={isOpen}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&s"
                      alt="user"
                      className="rounded-circle"
                      width="30"
                      height="30"
                    />
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu show position-absolute end-0 mt-2 p-0 w-auto">
                      <div className="dropdown-header fw-bold">Hi {user.name}!</div>
                      <div className="dropdown-divider"></div>
                      <a href="/profile" className="dropdown-item">
                        Profile
                      </a>
                      <button
                        onClick={() => alert("Signed out")}
                        className="dropdown-item"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div> :
                <li className="nav-item">
                  <Link to="/sign-in" className="btn btn-outline-primary">
                    Sign In
                  </Link>
                </li>
            }
            {
              user?.role === "admin" && <li className="nav-item">
                <Link to={'/getAllNotes'} className="btn btn-outline-primary">
                  Get All Notes
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}