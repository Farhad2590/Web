import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../SharedItems/Cover/Cover';
import orderCoverImage from '../../../assets/shop/banner2.jpg'
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
// import FoodCard from '../../../components/sharedtitle/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const{category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const Dessert = menu.filter(item => item.category === 'dessert');
    const Pizza = menu.filter(item => item.category === 'pizza');
    const Salad = menu.filter(item => item.category === 'salad');
    const Soup = menu.filter(item => item.category === 'soup');
    const Drinks = menu.filter(item => item.category === 'drinks');

    
    console.log(category);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <Cover img={orderCoverImage} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={Salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;