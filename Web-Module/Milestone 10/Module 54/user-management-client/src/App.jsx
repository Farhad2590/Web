
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data=>setUsers(data))
  },[])
  const handleSubmit = event =>{
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    console.log(email,name);
    const user = {
      name,email
    }
    console.log(user);
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data=> {
      console.log('featching data inside')
      const newUser = [...users,data]
      setUsers(newUser)
      from.reset();
    })
  }
  return (
    <>
      <h1>User Management System</h1>
      <h6>Users : {users.length}</h6>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br /> <br />
        <input type="email" name="email" id="" />
        <br /> <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id} >id = {user.id} || name = {user.name} || email = {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
