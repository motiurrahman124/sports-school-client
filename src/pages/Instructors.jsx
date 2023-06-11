import { useQuery } from "@tanstack/react-query";
import PageTitle from "../components/common/PageTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get("/instructors");
    return res.data;
  });

  return (
    <div>
      <PageTitle title={"Our Instructors"}></PageTitle>
      <div className="">
        <div className="max-w-screen-xl mx-auto py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-0 px-5 gap-8">
          {instructors?.map((c) => (
            <div
              key={c?._id}
              className={`bg-white rounded-lg shadow-lg p-5 border ${
                c?.seats === 0 && "!bg-red-600 text-white"
              }`}
            >
              <div className="md:h-[300px] h-[230px]">
                <img
                  src={c?.image}
                  alt=""
                  className="h-full rounded-lg w-full"
                />
              </div>
              <h1 className="text-2xl font-semibold font-oswald mt-4 mb-4 text-secondary text-center">
                {c?.name}
              </h1>
              <div className="space-y-2 text-center">
                <p className="text-lg">
                  <span className="font-medium font-open_sans">Email : </span>
                  {c?.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
