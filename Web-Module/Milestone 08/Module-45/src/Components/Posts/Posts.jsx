import { Link, useNavigate } from "react-router-dom";
const Posts = ({posts}) => {
    // console.log(posts);
    const {title,id,body} = posts;

    const navigate = useNavigate()
    const postsStyle ={
        border : '2px solid green',
        padding : '5px',
        // margin-botom : '10px'
        borderRadius : '20px'
    }
    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postsStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Post Detail</button></Link>
            <button onClick={handleShowDetail}>Click to Me</button>
        </div>
    );
};

export default Posts;