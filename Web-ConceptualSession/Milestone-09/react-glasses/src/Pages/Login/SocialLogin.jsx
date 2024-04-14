import useHooks from "../../hooks/useHooks";
import { useNavigate, useLocation } from 'react-router-dom'

const SocialLogin = () => {
    const { googleLogin, githubLogin, twitterLogin } = useHooks()
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location?.state || '/'
    console.log(from);

    const handleSocialLogin = (socialProvider) => {
        socialProvider().then(result => {
            if (result.user) {
                navigate(from)
                console.log(result.user);
            }
        })
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-primary btn-sm btn-outline"
                >
                    Google
                </button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-secondary btn-sm btn-outline"
                >
                    Github
                </button>

                <button
                    onClick={() => handleSocialLogin(twitterLogin)}
                    className="btn btn-accent btn-sm btn-outline"
                >
                    Twitter
                </button>
                <button
                    className="btn btn-secondary btn-sm btn-outline"
                >
                    Facebook
                </button>
            </div>
        </>
    );
};

export default SocialLogin;
