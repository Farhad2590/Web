import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../Hooks/useCart";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const[cart] =useCart()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const NavOptions = <>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/dashboard/cart">
            <button className="flex gap-1">
                <FaCartArrowDown className="text-3xl" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>

        {
            user ? <><button onClick={handleLogout} className="brn btn-ghost">Logout</button></> :
                <><li><Link to="/login">Login</Link></li></>
        }
    </>
    return (
        <>
            <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BistroBoss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;