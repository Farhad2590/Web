import Cards from "../../MiddleSide/Cards";
import Breaking from "../Shared/Header/Breaking";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="text-2xl">Hello From Home</h2>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2 border-green-500"><LeftSide></LeftSide></div>
                <div className="md:col-span-2 border-2 border-green-500">
                    {
                        news.map(newsItem => <Cards key={newsItem._id} news={newsItem}></Cards>)
                    }
                </div>
                <div className="border-2 border-green-500"><RightSide></RightSide></div>
            </div>
        </div>
    );
};

export default Home;