import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCarCatergoryCard from './SingleCarCatergoryCard';

const CarsByCategory = () => {
    const cars = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Cars</title>
            </Helmet>
            <div id="service-hero" className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-base-200 font-bold">Cars</h1>

                    </div>
                </div>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                {
                    cars.map(car => <SingleCarCatergoryCard key={car._id} car={car}></SingleCarCatergoryCard>)
                }
            </div>


        </div>
    );
};

export default CarsByCategory;