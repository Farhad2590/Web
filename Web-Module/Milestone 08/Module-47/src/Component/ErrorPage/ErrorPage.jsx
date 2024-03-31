import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
            <h2>Ooopsss:</h2>
            <h6>You Entered Wrong Page</h6>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;