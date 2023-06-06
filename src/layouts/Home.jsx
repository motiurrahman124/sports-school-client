import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const HomeLayout = () => {
    return (
      <div>
        <Header></Header>
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default HomeLayout;