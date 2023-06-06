import { Link } from "react-router-dom";

const Header = () => {
  const navOptions = (
    <>
      <li className="hover:text-secondary hover:border-b hover:border-secondary">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-secondary hover:border-b hover:border-secondary">
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className="hover:text-secondary hover:border-b hover:border-secondary">
        <Link to="/classes">Classes</Link>
      </li>
      <li className="hover:text-secondary hover:border-b hover:border-secondary">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {/* {isAdmin ? (
          <li>
            <Link to="/dashboard/adminhome">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/dashboard/userhome">Dashboard</Link>
          </li>
        )} */}
      {/* <li>
          <Link to="/dashboard/mycart">
            <button className="btn gap-2">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
          </Link>
        </li> */}
      {/* {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )} */}
    </>
  );

  return (
    <div className=" fixed-top  w-full bg-primary text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-base rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="md:text-3xl font-bold md:block hidden">
            <span className="text-secondary font-oswald">Sports</span> School
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-x-5 px-1 uppercase font-semibold font-oswald text-base">
            {navOptions}
          </ul>
        </div>
        <div className="">
          <Link className="btn bg-secondary border-secondary hover:bg-white hover:text-primary text-white font-medium text-lg capitalize">
            Login/Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
