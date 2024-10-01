import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, category, taste, details, photo };
        console.log(newCoffee);

        //send data to the server
        fetch('https://coffee-store-server-9mkohrqel-sultana-razias-projects.vercel.app/coffee', {
            method: "POST",
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
                        text: 'Coffee added successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='w-[90%] mx-auto my-9 '>
            <div className='bg-[#F4F3F0] rounded-md'>
                <h2 className='text-center text-[#374151] text-5xl pt-16 rancho-google-font font-extrabold'>Add New Coffee</h2>
                <p className='text-center text-lg text-[#1B1A1AB3] py-8 px-28 raleway-google-font'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee} className='px-28 pb-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Name</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Supplier</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Supplier" name='supplier' className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Category</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Category" name='category' className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Quantity</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Taste</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Taste" name='taste' className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Details</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Photo</span>
                            </div>
                            <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-full text-[#331A15] border-[#331A15] rounded-md text-center py-2 mt-6 font-semibold rancho-google-font'>
                        <input type="submit" value="Add Coffee" className='btn btn-block text-2xl bg-[#D2B48C]' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;