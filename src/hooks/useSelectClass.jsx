import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useSelectClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["select/class", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/select/class?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectedClass, refetch];
};
export default useSelectClass;

// queryFn: async () => {
//     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
//         authorization: `bearer ${token}`
//     }})
//     return res.json();
// },
