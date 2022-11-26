import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import FeaturedCarsCards from './FeaturedCarsCards/FeaturedCarsCards';

const FeaturedCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/featured-cars')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])
    console.log(cars)
    return (
        <div>
            <Helmet>
                <title>Featured Cars</title>
            </Helmet>
            <div id="service-hero" className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-base-200 font-bold">Featured Cars</h1>

                    </div>
                </div>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                {
                    cars.map(car => <FeaturedCarsCards key={car._id} featuredcar={car}></FeaturedCarsCards>)
                }
            </div>


        </div>
    );
};

export default FeaturedCars;