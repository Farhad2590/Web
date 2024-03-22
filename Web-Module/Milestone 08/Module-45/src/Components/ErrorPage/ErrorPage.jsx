import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Ooopsss!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go Back Where Are You From</p>
                    <Link to="/"><button>Go Back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;