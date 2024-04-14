

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name,email,photo,password,confirmPassword);

    }
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl py-5">Please Register</h2>
            <div className="border-2  border-green-400 p-10 rounded-xl space-y-2">
                <form onSubmit={handleRegister}>
                    <div>
                        <p>Name :</p>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p>Photo :</p>
                        <input name="photo" type="text" placeholder="Your Photo" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p>Email :</p>
                        <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p>Password :</p>
                        <input name="password" type="password" placeholder="Type password" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p>Confirm Password :</p>
                        <input name="confirmPassword" type="password" placeholder="Confirm password" className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className="btn btn-success text-white mt-5 w-full">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default Register;