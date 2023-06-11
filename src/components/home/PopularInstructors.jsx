import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery(
    ["instructors/popular"],
    async () => {
      const res = await axiosSecure.get("/instructors/popular");
      return res.data;
    }
  );

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto pb-12 lg:px-0 px-5">
        <h1 className="text-4xl font-bold font-oswald text-center">
          Popular <span className="text-secondary">Instructors</span>
        </h1>
        <p className="text-lg font-open_sans italic text-center mt-2">
          Join our sports school instructor and be good player.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 mt-12">
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

export default PopularInstructors;
