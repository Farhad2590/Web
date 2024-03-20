
import Link from "../Link/Link";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import { useState } from 'react';



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'not-found' }
      ];
      
    return (
        <nav>
            
            <div className="p-6 text-2xl lg:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross2 /> : < TiThMenuOutline /> 

                }
                

            </div>
            
            <ul className={`lg:flex absolute lg:static bg-black text-white duration-10000 mx-6 p-3 ${open ? '' : 'hidden'}`}>
            {
                routes.map(route => <Link  key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;