import { Link } from "react-router-dom";
import Button from "./Button";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
      {user && (
        <li className="hover:text-secondary hover:border-b hover:border-secondary">
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}
      {user && (
        <li className="hover:text-secondary text-red-500 hover:border-b hover:border-secondary cursor-pointer">
          <span onClick={handleLogOut}>Logout</span>
        </li>
      )}
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
    <div className="sticky top-0 w-full bg-primary text-white z-10 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 lg:px-0 px-4">
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
          <a className="md:text-3xl font-bold md:block hidden uppercase">
            <div className="h-12 flex items-center mb-4">
              <img
                src="https://i.ibb.co/r6t5b3R/images-removebg-preview-1.png"
                alt=""
                className="h-full"
              />
              <p>
                <span className="text-secondary font-oswald ">Sports</span>{" "}
                School
              </p>
            </div>
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-x-5 px-1 uppercase font-medium font-oswald text-base">
            {navOptions}
          </ul>
        </div>
        <div className="">
          {user ? (
            <div className="">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/bWMQVhF/no-image.png"
                }
                className="w-[50px] h-[50px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2"
                title={user?.displayName}
              />
            </div>
          ) : (
            <Link to="/login">
              <Button text={"Login / Register"}></Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
