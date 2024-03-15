import { useEffect, useState } from "react"

export default function User(){

    const [User, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return(
        <div>
            <h3>
                Users : {User.length}
            </h3>
        </div>
    )
}