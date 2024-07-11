import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSeure from "./useAxiosSeure";


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSeure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;