import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignin} = useAuth();
    const axiosPublic = useAxiosOpen()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle></FaGoogle>
                    Google Login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;