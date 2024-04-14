import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const useHooks = () => {
    const all = useContext(AuthContext);
    return all
};

export default useHooks;