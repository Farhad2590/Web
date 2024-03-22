import { useLoaderData } from "react-router-dom";
import Posts  from "../Posts/Posts";
import './Post.css'

const Post = () => {

    const post = useLoaderData()
    return (
        <div>
            <h2>My Users Post</h2>
            <p>Post :{post.length}</p>
            <div className="post">
                {
                    post.map(posts => <Posts key={posts.id} posts={posts}></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;