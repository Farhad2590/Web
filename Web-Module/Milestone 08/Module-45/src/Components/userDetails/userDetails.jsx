import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,email,phone} = user;
    return (
        <div>
            <h2>Details About User :{name}</h2>
            <p>See us on :{email}</p>
            <p>Call us :{phone}</p>
        </div>
    );
};

export default UserDetails;