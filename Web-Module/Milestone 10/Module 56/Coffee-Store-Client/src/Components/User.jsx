import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUsers = useLoaderData()
    const[users,setUsers] = useState(loadedUsers)
    const handleDelete = id =>{
        fetch(`http://localhost:5000/user/${id}`,{
            method:'DELETE'
        }).then(res => res.json())
        .then(data =>{
            if(data.deletedCount>0){
                console.log('Deleted Successfully');
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h5 className="text-5xl">User Data : {users.length}</h5>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={()=> handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }
                        
                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;