import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import App from "../../App";

const Home = () => {
    return (
        <div>
            <h1>Hello React Router From Home Page</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;