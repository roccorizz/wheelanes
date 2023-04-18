import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import SingleCarCatergoryCard from './SingleCarCatergoryCard';

const CarsByCategory = () => {
    const cars = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Cars</title>
            </Helmet>
            <div id="service-hero" >


                <h1 className="mt-10 mb-2 text-xl md:text-2xl lg:text-4xl text-cyan-500 font-bold md:text-left text-center"> CARS</h1><hr className='py-2' />

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