import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [registerError, setRegisterError] = useState('')
    const [sucess, setSucess] = useState('')
    const emailRef = useRef(null)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setRegisterError('')
        setSucess('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setSucess('User Created Successfully')
                }
                else{
                    alert('Please Verify Your Email Address')
                }
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            })
    }
    const handleForgetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            console.log('Please Provide an Email');
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log('Please Write Valid Email');
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(() =>{
            alert('Please Check Your Email')
        } )
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassword}
                                className="label-text-alt link link-hover"
                                
                                >Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-900">{registerError}</p>
                    }
                    {
                        sucess && <p className="text-green-900">{sucess}</p>
                    }
                    <p>New in Website Please <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;