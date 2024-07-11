import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedItems/Footer/Footer";
import Navbar from "../SharedItems/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation()
    console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;