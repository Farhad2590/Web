import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Checkout = () => {

    const services = useLoaderData();
    const{user} = useContext(AuthContext);
    const { title, _id, price,img } = services
    const handleFrom = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const date = from.date.value;
        const price = from.price.value;

        const Order = {
            customerName : name,
            email,
            date,
            service_id: _id,
            service_name: title,
            img,
            price
        }

        console.log(Order);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers :{
                'content-type':'application/json'
            },
            body : JSON.stringify(Order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">{title}</h2>
            <form className="card-body" onSubmit={handleFrom}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="price" name="price" defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn bg-orange-600 text-white" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;