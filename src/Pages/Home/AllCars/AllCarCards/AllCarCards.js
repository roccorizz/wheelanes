import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllCarCards = ({ car }) => {
    const { _id, BodyCategoryImage, bodyType } = car;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
            <figure>

                <img src={BodyCategoryImage} className='h-48' alt="" />


            </figure>
            <div className="card-body">
                <h2 className="card-title text-1xl">{bodyType}</h2>

                <div className='flex justify-end'>
                    <Link to={`/cars/${_id}`} className='btn btn-outline btn-secondary btn-sm'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCarCards;