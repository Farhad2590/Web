// import { useEffect, useState } from "react";
import SharedTitle from "../../../components/sharedtitle/SharedTitle";
import MenuItem from "../../../SharedItems/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    console.log(popular);
    return (
        <section className="mb-12">
            <SharedTitle
                subHeading={'From 11:00AM To 10:00PM'}
                heading={'From Our Menu'}
            >
            </SharedTitle>
            <div className="grid md:grid-cols-2  gap-10">
                {
                    popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;