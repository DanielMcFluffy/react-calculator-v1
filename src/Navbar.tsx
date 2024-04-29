export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
          <a href="#" className="navbar-brand fw-bolder">
            The Amazing Calculator App
          </a>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Features
            </button>
            <ul className="dropdown-menu ">
              <li>
                <a className="dropdown-item" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Exit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
