import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Button from "../components/common/Button";

const PageNotFound = () => {
  return (
    <div>
      <PageTitle title={"404"}></PageTitle>
      <div className="text-center mt-20">
        <h1 className="text-9xl font-bold font-oswald text-secondary">404</h1>
        <h2 className="text-5xl font-oswald font-bold text-primary mt-8">
          Oops! Page Not Found!
        </h2>
        <p className="text-lg font-open_sans my-8">
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        <Link to="/">
          <Button text={"Back To Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
