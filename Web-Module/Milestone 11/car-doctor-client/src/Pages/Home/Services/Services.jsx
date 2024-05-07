import { useEffect } from "react";
import { useState } from "react";
const Services = () => {
    const [service, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div>
            <div className="text-center">
                <h3 className="text-3xl text-orange-500 font-bold">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <h2>Services : {service.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    service.map(card => (
                        <div key={card._id} className="card  bg-base-100 shadow-xl">
                            <figure><img src={card.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                <p>{card.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;