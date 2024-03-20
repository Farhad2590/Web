

const Users = ({user}) => {


    const {id,name,email,phone} = user;

    const usersStyle ={
        border : '2px solid green',
        padding : '5px',
        // margin-botom : '10px'
        borderRadius : '20px'
    }
    return (
        <div style={usersStyle}>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default Users;