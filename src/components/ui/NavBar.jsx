import { Link, NavLink, useNavigate } from "react-router-dom";
import { isActive } from "../../helpers/navbarHelpers";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // console.log("logout");
    navigate('/login', {
      replace: true
    })
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={isActive}
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={isActive}
            to='/dc'
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>Gustavo Blanco</span>
          <button
            className='nav-item nav-link btn'
            onClick={handleLogout}
            >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
