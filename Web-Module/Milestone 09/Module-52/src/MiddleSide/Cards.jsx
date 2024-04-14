import { FaRegEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";


const Cards = ({ news }) => {
    const { title, author, image_url, total_view, rating, details } = news;

    const { name, published_date, img } = author;
    const { number } = rating;
    console.log(typeof(details));
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <img alt="" src={img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
                            <span className="text-xs dark:text-gray-600">{published_date}</span>
                        </div>
                    </div>
                    <div className="flex">
                        <CiBookmark className="text-2xl" />
                        <CiShare2 className="text-2xl" />
                    </div>
                </div>
                <div>

                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    {
                        
                        details.length > 200
                            ? <p>{details.slice(0, 200)}<Link>Read More....</Link></p>
                            : <p>{details}</p>
                    }
                    <p className="text-sm dark:text-gray-600">{details}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-lg ">{number}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegEye className="text-xl" />
                        <p className="text-lg ">{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;