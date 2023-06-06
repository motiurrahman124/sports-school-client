import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const HomeLayout = () => {
    return (
      <div>
        <Header></Header>
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default HomeLayout;