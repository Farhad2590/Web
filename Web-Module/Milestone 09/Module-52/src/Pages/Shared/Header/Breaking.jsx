import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breaking = () => {
    return (
        <div className="flex bg-gray-300 p-4">
            <button className="btn text-white btn-error">Breaking News</button>
            <Marquee pauseOnHover={true} speed={200}>
               <Link className="mr-12" to="/"> I can be a React component, multiple React components.....</Link>
               <Link className="mr-12" to="/"> I can be a React component, multiple React components.....</Link>
               <Link className="mr-12" to="/"> I can be a React component, multiple React components.....</Link>
               <Link className="mr-12" to="/"> I can be a React component, multiple React components.....</Link>
            </Marquee>
        </div>
    );
};

export default Breaking;