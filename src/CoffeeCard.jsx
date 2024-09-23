import React from 'react';

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, category, taste, details, photo } = coffee;

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
                        <button className="btn">Edit</button>
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;