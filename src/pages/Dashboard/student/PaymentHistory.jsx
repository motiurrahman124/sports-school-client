import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [] } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });

  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/dashboard/instructor-home">Home</Link>
          </li>
          <li>Payment History</li>
        </ul>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg px-5">
        <h1 className="my-10 text-2xl font-oswald text-primary font-bold uppercase border-b border-secondary pb-5">
          My Payment History
        </h1>
        <table className="table">
          <thead>
            <tr className="text-base font-medium text-primary bg-secondary">
              <th>#</th>
              <th>Transaction Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((p, index) => (
              <tr key={p?._id}>
                <th>{index + 1}</th>
                <td>{p?.selectedClassId}</td>
                <td>{p?.name}</td>
                <td>{p?.email}</td>
                <td>{p?.class_name}</td>
                <td>${p?.price}</td>
                <td> {new Date(p?.date).toLocaleDateString()}</td>
                <td> {new Date(p?.date).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
