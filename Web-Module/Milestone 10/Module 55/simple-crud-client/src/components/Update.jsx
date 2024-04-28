import { useLoaderData } from 'react-router-dom'

const Update = () => {
    const loadedUsers = useLoaderData()
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const updatedUser = { email, name }
        // console.log(updatedUser);
        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert('User Updated Sucessfully')
                }
            })
    }
    return (
        <div>
            <h3>Update Information of = {loadedUsers.name}</h3>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUsers.name} id="" />
                <br /><br />
                <input type="email" name="email" defaultValue={loadedUsers.email} id="" />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Update;