import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(email, name, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="pl-5 pb-5">Already Register? Please <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;