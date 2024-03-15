import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const handleClickAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleClickMinus = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    // console.log(abc);
    return(
        <div style={{border:'2px solid green', margin:'20px', padding: '20px', borderRadius: '10px'}}>
            <h3>Counter :{count}</h3>
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickMinus}>Minus</button>
        </div>
    )
}