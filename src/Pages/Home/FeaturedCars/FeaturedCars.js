import React, { useEffect, useState } from 'react';

import FeaturedCarsCards from './FeaturedCarsCards/FeaturedCarsCards';

const FeaturedCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://wheelanes-server.vercel.app/featured-cars')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])

    return (
        <div>

            <div id="service-hero">



                <h1 className="mt-10 mb-2 text-xl md:text-2xl lg:text-4xl text-cyan-500 font-bold md:text-left text-center">FEATURED CARS</h1><hr className='py-2' />



            </div>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-5  '>
                {
                    cars.map(car => <FeaturedCarsCards key={car._id} featuredcar={car}></FeaturedCarsCards>)
                }
            </div>


        </div>
    );
};

export default FeaturedCars;