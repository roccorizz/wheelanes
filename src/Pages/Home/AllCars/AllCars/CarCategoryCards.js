import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const CarCategoryCards = ({ carcategoryy }) => {
    const { category_id, bodyType, CategoryImage } = carcategoryy;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2 mx-auto" style={{ width: '95%' }}>
            <figure>
                <img src={CategoryImage} className='h-72 w-full' alt="categoryimage" />
            </figure>
            <div className="card-body  align-self">
                <h2 className="card-title text-1xl justify-center capitalize">{bodyType}</h2>
                <div className='flex justify-end'>
                    <Link to={`/allcars/${category_id}`} className='btn btn-outline bg-cyan-500 text-white btn-sm'>
                        View Items
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCategoryCards;