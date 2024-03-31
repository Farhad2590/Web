import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [sucess, setSucess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        console.log("From SUbmitting");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.terms.checked;

        setRegisterError('')
        setSucess('')

        if (password.length < 6) {
            setRegisterError('Password should be 6 character or more')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at lease one Uppercase letter')
            return;
        }
        else if(!checkbox){
            setRegisterError('Please Accept our terms and conditions')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSucess('User Created Successfully')

                sendEmailVerification(result.user)
                .then(() => {
                    alert('Please Verify Your Email Address')
                })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-2xl text-center my-4">Please Log In</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full py-2 px-4" type="email" name="email" placeholder="Enter Email" id="" required />
                    <div className="mb-4 relative">
                        <input className=" w-full py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Password"
                            id="" required />
                        <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaRegEyeSlash /> : <FaEye />} {/* Render the icons as components */}
                        </span>
                    </div>
                    <div className="mb-4">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms"> Accept Our Terms and Condition</label>
                    </div>
                    <input className="mb-4 w-full bg-green-500 py-2 px-4" type="submit" value="Submit" />
                </form>
                {
                    registerError && <p className="text-red-900">{registerError}</p>
                }
                {
                    sucess && <p className="text-green-900">{sucess}</p>
                }
                <p>New in Website Please <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default Register;