import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CarCategoryCards from './CarCategoryCards';


const CarCategory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://wheelanes-server.vercel.app/car-categories')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])
    console.log(cars)
    return (
        <div>
            <Helmet>
                <title>Car Categories</title>
            </Helmet>
            <div id="service-hero" className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-base-200 font-bold">Car Categories</h1>

                    </div>
                </div>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                {
                    cars.map(car => <CarCategoryCards key={car._id} carcategoryy={car}></CarCategoryCards>)
                }
            </div>


        </div>
    );
};

export default CarCategory;