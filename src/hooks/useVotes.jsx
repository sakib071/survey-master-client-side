import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useVotes = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['vote', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/votes?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useVotes;