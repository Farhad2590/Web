import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    // const handleClickLogin = e => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email,password);
    // }
    const handleClickLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error =>{
            console.error(error);
            })
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="p-24 bg-slate-200">
                <h2 className="text-3xl font-semibold my-10">Login Your Account</h2>
                <form onSubmit={handleClickLogin} className="flex flex-col space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold mb-3">Email Address</label>
                        <input name="email" required type="email" placeholder="Enter your email address" className="input input-bordered bg-gray-200 w-full max-w-xs" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-semibold mb-3">Password</label>
                        <input name="password" required type="password" placeholder="Enter your password" className="input input-bordered bg-gray-200 w-full max-w-xs" />
                    </div>
                    <button className="btn btn-active bg-gray-700 text-white">Login</button>
                </form>
                <p className="mt-10"> Dont’t Have An Account ? <Link to="/register"><span className="text-red-500">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;