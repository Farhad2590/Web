import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Catgory from "./Catgory/Catgory";
import Feature from "./Feature/Feature";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Catgory></Catgory>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;