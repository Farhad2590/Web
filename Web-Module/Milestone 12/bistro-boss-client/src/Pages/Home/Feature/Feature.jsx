import SharedTitle from "../../../components/sharedtitle/SharedTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import './featured.css'

const Feature = () => {
    return (
        <div className="featured-items bg-fixed text-white">
            <SharedTitle
                subHeading={'Check it out'}
                heading={'Fatured Items'}
            >
            </SharedTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quis veniam dicta. Molestias totam ea eius ducimus laudantium! Cupiditate aspernatur omnis labore, corporis optio mollitia minima laudantium aut velit asperiores veritatis molestiae, debitis eveniet atque aliquid dicta eos officiis molestias, laborum amet itaque beatae voluptates hic! Dolore voluptatum recusandae nostrum?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                </div>
            </div>

        </div>
    );
};

export default Feature;