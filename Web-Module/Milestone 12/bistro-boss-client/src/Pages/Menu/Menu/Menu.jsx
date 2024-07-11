import { Helmet } from 'react-helmet-async';
import Cover from '../../../SharedItems/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SharedTitle from '../../../components/sharedtitle/SharedTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessertbg.jpeg'
import pizzaImg from '../../../assets/menu/pizzabg.jpg'
import saladImg from '../../../assets/menu/saladbg.jpg'
import soupImg from '../../../assets/menu/soupbg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SharedTitle
                subHeading={"Don't Miss"}
                heading={'Todays Offer'}
            ></SharedTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;