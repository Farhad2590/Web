import { useEffect } from "react";
import { useState } from "react";
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types';



const Blogs = ({handleBlogs, handleReadingTime}) => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs : {blog.length}</h1>
            {
                blog.map(blog =>
                    <Blog
                        key={blog.id}
                        handleBlogs={handleBlogs}
                        handleReadingTime={handleReadingTime}
                        blog={blog}>
                    </Blog>)
            }

        </div>
    );
};
Blogs.propTypes = {
    handleBlogs : PropTypes.func,
    handleReadingTime : PropTypes.func
}

export default Blogs;