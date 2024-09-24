import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, category, taste, details, photo } = coffee;

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

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex gap-10 justify-center p-10 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt={name} />
                </figure>
                <div className="flex gap-7 justify-between">
                    <div className='space-y-3'>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{supplier}</h2>
                        <h2 className="card-title">{category}</h2>
                        <h2 className="card-title">{taste}</h2>
                    </div>
                    <div className="btn-group btn-group-vertical space-y-4 flex flex-col">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;