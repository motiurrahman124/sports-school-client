import { useQuery } from "@tanstack/react-query";
import PageTitle from "../components/common/PageTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Classes = () => {
    const {user} = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useAxiosSecure();
  const { data: classList = [] } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  const handleSelectClass = () =>{
    if(!user){
        Swal.fire({
          title: "Warning!",
          text: "Login first to select this class!",
          icon: "warning",
          confirmButtonText: "Ok",
        });
    }
  }
  return (
    <div>
      <PageTitle title={"Our Classes"}></PageTitle>
      <div className="bg-slate-50">
        <div className="max-w-screen-xl mx-auto py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-0 px-5 gap-8">
          {classList?.map((c) => (
            <div
              key={c?._id}
              className={`bg-white rounded-lg shadow-lg p-5 ${
                c?.seats === 0 && "!bg-red-600 text-white"
              }`}
            >
              <div className="h-[250px]">
                <img
                  src={c?.image}
                  alt=""
                  className="h-full rounded-lg w-full"
                />
              </div>
              <h1 className="text-2xl font-semibold font-oswald mt-4 mb-4 text-secondary">
                {c?.class_name}
              </h1>
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="font-medium font-open_sans">
                    Instructor :{" "}
                  </span>
                  {c?.instructor_name}
                </p>
                <p className="text-lg">
                  <span className="font-medium font-open_sans">
                    Available Seats :{" "}
                  </span>
                  {c?.seats}
                </p>
                <p className="text-lg">
                  <span className="font-medium font-open_sans">Price : </span>$
                  {c?.price}
                </p>
              </div>
              <div className="mt-4">
                <button
                onClick={()=>handleSelectClass(c?._id)}
                  className="btn w-full bg-secondary !border-secondary hover:bg-white hover:text-primary text-white font-medium text-lg capitalize"
                  disabled={c?.seats === 0 || isAdmin || isInstructor}
                >
                  {" "}
                  select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
