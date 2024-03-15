import { useEffect } from "react";
import { useState } from "react";
import Botel from "../Botel/Botel";
import './Botels.css'
import { addTools, getStorageCart } from "../utilities/localStorage";

const Botels = () => {

    const [botels, setBotels] = useState([])
    const [cart , setCart] = useState([])
    
    const handleBottels = bottel => {
        const newCart = [...cart , bottel]
        setCart(newCart)
        addTools(bottel.id)
    }

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBotels(data))

    }, [])

    useEffect( () => {
        console.log('Called the useeffect',botels.length);
        const storeCart = getStorageCart();
        console.log(storeCart);
    },[botels])

    return (
        <div>
            <h2>Bottles Here : {botels.length}</h2>
            <h2>Added Cart : {cart.length}</h2>
            <div className="Botels-container">
                {
                    botels.map(botel => <Botel 
                        key={botel.id} 
                        handleBottels={handleBottels}
                        botel={botel}></Botel>)
                }
            </div>
        </div>
    );
};

export default Botels;