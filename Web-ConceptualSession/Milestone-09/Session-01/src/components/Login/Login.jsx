const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
      
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

    }
    return (
        
        <div className="flex flex-col items-center">
            <h2 className="text-2xl py-5">Please Login</h2>
            <div className="border-2  border-green-400 p-10 rounded-xl">
                <form onSubmit={handleLogin}>
                    <div>
                        <p>Email :</p>
                        <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p>Password :</p>
                        <input name="password" type="password" placeholder="Type password" className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className="btn btn-success text-white mt-5 w-full">Login Now</button>
                </form>
            </div>
        </div>
    );
};

export default Login;