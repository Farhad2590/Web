import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const Navigate = useNavigate()
    const {title,id,body} = post
    const handleGoBack = () =>{
        Navigate(-1)
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <h2>Post Details</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;