import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, quantity, supplier, taste, category, details, photo_url } = coffee;

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;

        const updateCoffee = {name,quantity,supplier,taste,category,details,photo_url}

        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-semibold text-center">Update Coffee</h1>
            <form onSubmit={handleUpdate} className="flex flex-col gap-2">
                {/* form name and quantity row */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                   
                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>


                {/* form supplier and test row */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier Name</span>
                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                   
                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>

                
                {/* form category and details row */}
                <div className="md:flex gap-5">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                   
                    <label className="form-control md:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* form category and details row */}
                <div className="">
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text">Photo_url</span>
                        </div>
                        <input type="text" name="photo_url" defaultValue={photo_url} placeholder="Photo_url" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Coffee" className="mt-2 btn btn-block bg-amber-600"/>
            </form>

        </div>
    );
};

export default UpdateCoffee;