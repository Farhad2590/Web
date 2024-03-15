import { FaBookmark } from "react-icons/fa";

import PropTypes from 'prop-types';
const Blog = ({ blog,handleBlogs,handleReadingTime }) => {
    // console.log(blog);
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        
        <div className='mb-20 space-y-5'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture pf Title ${title}`} />
            <div className='flex justify-between mb-5'>
                <div className='flex items-center'>
                    <img src={author_img} alt="" className='w-20 ' />
                    <div className='ml-6'>
                        <h6 className='text-2xl font-bold'>{author}</h6>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span> {reading_time}min read</span>
                    <button onClick={() => {handleBlogs(blog)}}
                     className="ml-3 text-green-600 text-2xl"><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={()=>{handleReadingTime(id,reading_time)}}
            className="text-red-400 text-xl font-bold underline">
                Mark as read</button>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBlogs : PropTypes.func,
    handleReadingTime : PropTypes.func
}

export default Blog;