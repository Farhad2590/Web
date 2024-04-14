import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'





const RightSide = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-bold mb-4">Find Us On</h2>
                <a className=" p-4 flex text-lg items-center border-2 rounded-t-lg">
                    <FaFacebookSquare className="mr-3" />
                    <span>Facebook</span>
                </a>
                <a className=" p-4 flex text-lg items-center border-x-2">
                    <FaTwitterSquare className="mr-3" />
                    <span>Twitter</span>
                </a>
                <a className=" p-4 flex text-lg items-center border-2 rounded-b-lg">
                    <FaInstagramSquare className="mr-3" />
                    <span>Instagram</span>
                </a>
            </div>

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSide;