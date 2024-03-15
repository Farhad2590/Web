import { useState } from "react"

export default function Team() {

    const [players, setPlayers] = useState(11)

    const addPlayers = () =>{
        const newPlayer = players + 1;
        setPlayers(newPlayer);
    }
    const removePlayers = () =>{
        const newPlayer = players - 1;
        setPlayers(newPlayer);
    }

    const styleContainer = {
        border: '2px solid red', 
        margin: '20px', 
        padding: '20px', 
        borderRadius: '10px'
    }
    return (
        <div style={styleContainer}>
            <h3>Players :{players}</h3>
            <button onClick={addPlayers}>Add Players</button>
            <button onClick={removePlayers}>Remove Players</button>
        </div>
    )
}