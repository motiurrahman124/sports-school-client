import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { FaHome, FaUsers, FaCalendarAlt, FaBookReader } from "react-icons/fa";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  // const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;
  const isInstructor = false;
  // const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <AiOutlineMenuUnfold
            className="ml-10 mt-5 bg-primary p-2 text-white rounded-lg"
            size={42}
          />
        </label>
        <div className="pt-5 px-10">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side bg-primary">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base text-white dashboard">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  {" "}
                  <SiGoogleclassroom /> Manage Classes
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manage-users">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/instructorhome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  {" "}
                  <FaBookReader /> Add Class
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allusers">
                  <SiGoogleclassroom /> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaCalendarAlt></FaCalendarAlt> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <SiGoogleclassroom /> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
