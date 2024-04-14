// import { useEffect, useState } from "react";
// import Cards from "./Cards";



// const MiddleSide = () => {
//     const [news, setNews] = useState([]);
//     useEffect(() => {
//         fetch('news.json')
//             .then(res => res.json())
//             .then(data => setNews(data))
//     }, [])
//     return (
//         <div>
//             <h2 className="text-2xl">Middle Side{news.length}</h2>
//             {
//                 news.map(newsItem => <Cards key={newsItem._id} news={newsItem}></Cards>)
//             }
//         </div>
//     );
// };

// export default MiddleSide;