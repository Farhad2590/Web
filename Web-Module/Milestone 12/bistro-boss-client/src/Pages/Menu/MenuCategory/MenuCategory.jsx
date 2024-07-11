import { Link } from "react-router-dom";
import Cover from "../../../SharedItems/Cover/Cover";
import MenuItem from "../../../SharedItems/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-12">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2  gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;