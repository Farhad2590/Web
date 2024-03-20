import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import './User.css'

const User = () => {
    const users = useLoaderData()
    return (
        <div >
            
            <h2>Hello From Users</h2>
            <p>User {users.length}</p>
            <div className="user">
                {
                    users.map(user => <Users key={user.id} user={user} ></Users>)
                }
            </div>
        </div>
    );
};

export default User;