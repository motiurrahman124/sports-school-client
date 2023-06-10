import { Link } from "react-router-dom";
import useInstructorClass from "../../../hooks/useInstructorClass";

const MyClass = () => {
  const [myClass] = useInstructorClass();
  console.log("🚀 ~ file: MyClass.jsx:6 ~ MyClass ~ class:", myClass);

  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/dashboard/instructor-home">Home</Link>
          </li>
          <li>My Classes</li>
        </ul>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg px-5">
        <h1 className="my-10 text-2xl font-oswald text-primary font-bold uppercase border-b border-secondary pb-5">
          My Classes
        </h1>
        <table className="table">
          <thead>
            <tr className="text-base font-medium text-primary bg-secondary">
              <th>#</th>
              <th>image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClass?.map((c, index) => (
              <tr key={c?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={
                          c?.image
                            ? c?.image
                            : "https://i.ibb.co/bWMQVhF/no-image.png"
                        }
                        alt="image"
                      />
                    </div>
                  </div>
                </td>
                <td>{c?.class_name}</td>
                <td>${c?.price}</td>
                <td>{c?.seats}</td>
                <td>{c?.enrolled ? c?.enrolled : 0}</td>
                <td>{c?.status}</td>
                <td>
                  {c?.status === "denied" ? (
                    <span className="text-primary hover:underline cursor-pointer font-medium">
                      view feedback
                    </span>
                  ) : (
                    "no feedback"
                  )}
                </td>
                <th className="flex gap-x-2">
                  <button
                    className={`bg-primary px-3 py-2 text-white rounded-lg hover:text-secondary`}
                  >
                    Update
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
