import './Botel.css'
const Botel = ({botel ,handleBottels}) => {
    // console.log(botel);
    const {name , img , price} = botel;
    return (
        <div className="botel-container">
            <h3>Bottle : {name}</h3>
            <img src={img}></img>
            <p>Price : {price}</p>
            <button onClick={()=>{handleBottels(botel)}}>Purchase</button>
            
            
        </div>
    );
};

export default Botel;