import React from 'react';
import { Link } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';



const FeaturedCarsCards = ({ featuredcar }) => {
    const { _id, carName, image, resale_price, description } = featuredcar;
    const limit = 100;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2 mx-auto" style={{ width: '95%' }}>
            <figure>
                <img src={image} className='h-52 w-full' alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-1xl capitalize">{carName}</h2>
                <div className="card-actions justify-start">
                    <h3 className='text-black-600' style={{ fontSize: '17px' }}><strong>Resale Price</strong> : <span className='text-red-600 font-bold text-xl'>{resale_price}$</span></h3>
                </div>
                <div className="card-actions justify-start">
                    <h3 className='text-black-300' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{description.substring(0, limit) + "..."}</h3>
                </div>
                <div className='flex justify-end'>
                    <Link to={`/featured-cars/${_id}`} className='btn btn-outline bg-cyan-500 text-white btn-sm'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCarsCards;