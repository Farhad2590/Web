import Swal from 'sweetalert2'
import Navbar from './Navbar';

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo_url }

        console.log(newCoffee);
        // fetch('http://localhost:5000/coffee', {
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-24">
                <h1 className="text-3xl font-semibold text-center">Add Coffee</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    {/* form name and quantity row */}
                    <div className="md:flex gap-5">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>


                    {/* form supplier and test row */}
                    <div className="md:flex gap-5">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Supplier Name</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>


                    {/* form category and details row */}
                    <div className="md:flex gap-5">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* form category and details row */}
                    <div className="">
                        <label className="form-control md:w-full">
                            <div className="label">
                                <span className="label-text">Photo_url</span>
                            </div>
                            <input type="text" name="photo_url" placeholder="Photo_url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add Coffee" className="mt-2 btn btn-block bg-amber-600" />
                </form>

            </div>
        </div>
    );
};

export default AddCoffee;