import { useQuery } from "@tanstack/react-query";
import Button from "../../components/common/Button";

const AllUser = () => {
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table">
          <thead>
            <tr className="text-base font-medium text-primary bg-secondary">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <th className="flex gap-x-2">
                  <button className="bg-primary px-3 py-2 text-white rounded-lg hover:text-secondary">
                    Make Instructor
                  </button>
                  <button className="bg-primary px-3 py-2 text-white rounded-lg hover:text-secondary">
                    Make Admin
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

export default AllUser;
