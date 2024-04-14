import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleClickRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        // console.log(email,password,name,photo);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')

        console.log(email,password,name,photo);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="flex flex-col justify-center items-center w-full ">
            <div className="p-24 bg-slate-200">
                <h2 className="text-3xl font-semibold my-10">Register Your Account</h2>
                <form onSubmit={handleClickRegister} className="flex flex-col space-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold mb-3">Your Name</label>
                        <input name="name" type="name" placeholder="Enter your name" className="input input-bordered bg-gray-200 w-full max-w-xs" />
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="photo" className="font-semibold mb-3">Your Photo Url</label>
                        <input name="photo" type="photo" placeholder="Your Photo Url" className="input input-bordered bg-gray-200 w-full max-w-xs" />
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="email"  className="font-semibold mb-3">Email Address</label>
                        <input name="email" required type="email" placeholder="Enter your email address" className="input input-bordered bg-gray-200 w-full max-w-xs" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-semibold mb-3">Password</label>
                        <input name="password" required type="password" placeholder="Enter your password" className="input input-bordered bg-gray-200 w-full max-w-xs" />
                    </div>
                    <button className="btn btn-active bg-gray-700 text-white">Register</button>
                    <p> Already Have An Account ? <Link to="/login"><span className="text-red-500">Login</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;