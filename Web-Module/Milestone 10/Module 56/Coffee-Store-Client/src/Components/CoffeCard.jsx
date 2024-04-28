import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeCard = ({ coffe, setCofees, coffees }) => {
    console.log(coffe);
    const { _id, name, quantity, supplier, taste, category, details, photo_url } = coffe

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Coffee has been deleted.",
                                "success"
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCofees(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="flex gap-2 py-5 items-center bg-base-100 shadow-xl">
            <figure><img src={photo_url} alt="Movie" className="w-9/12" /></figure>
            <div>
                <h2 className="font-bold">Name :{name}</h2>
                <h2 className="font-bold">Quantity :{quantity}</h2>
                {/* <h2 className="font-bold">Supplier :{supplier}</h2> */}
                <h2 className="font-bold">Taste :{taste}</h2>
                <h2 className="font-bold">Category :{category}</h2>
            </div>
            <div className="join join-vertical gap-3">
                <button className="btn btn-active">View</button>
                <Link to={`updateCoffee/${_id}`}>
                    <button className="btn btn-active">Edit</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-active">X</button>
            </div>

        </div>
    );
};

export default CoffeCard;