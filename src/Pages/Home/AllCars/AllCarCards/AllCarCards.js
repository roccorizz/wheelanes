import React from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllCarCards = ({ car }) => {
    const { _id, BodyCategoryImage, bodyType } = car;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
            <Link to={`/cars-bodytype/${_id}`}>
                <div>
                    <figure>

                        <img src={BodyCategoryImage} className='h-48' alt="" />


                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-1xl">{bodyType}</h2>
                    </div>
                </div>
            </Link>


        </div>
    );
};

export default AllCarCards;