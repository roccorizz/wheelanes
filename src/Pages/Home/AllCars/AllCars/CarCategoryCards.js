import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const CarCategoryCards = ({ carcategoryy }) => {
    const { category_id, bodyType, CategoryImage } = carcategoryy;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
            <figure>
                <PhotoProvider>
                    <PhotoView src={CategoryImage}>
                        <img src={CategoryImage} className='h-48' alt="categoryimage" />
                    </PhotoView>
                </PhotoProvider>

            </figure>
            <div className="card-body  align-self">
                <h2 className="card-title text-1xl justify-center capitalize">{bodyType}</h2>
                <div className='flex justify-end'>
                    <Link to={`/allcars/${category_id}`} className='btn btn-outline btn-secondary btn-sm'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCategoryCards;