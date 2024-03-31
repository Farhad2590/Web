import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    const handleGoogleSignin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleGithubSignin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleGoogleSignout = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            {
                user ?
                    <button onClick={handleGoogleSignout}>Logout</button> :
                    <div>
                        <button onClick={handleGoogleSignin}>GoogleLogin</button>
                        <button onClick={handleGithubSignin}>GithubLogin</button>
                    </div>

            }


            {user &&
                <div>
                    <h3>User : {user.displayName}</h3>
                    <p>Email : {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;