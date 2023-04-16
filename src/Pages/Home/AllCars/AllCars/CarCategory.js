import React, { useEffect, useState } from 'react';

import CarCategoryCards from './CarCategoryCards';


const CarCategory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://wheelanes-server.vercel.app/car-categories')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])

    return (
        <div>

            <div id="service-hero">

                <h1 className="mt-10 mb-2 text-xl md:text-2xl lg:text-4xl text-cyan-500 font-bold md:text-left text-center">CAR CATEGORIES</h1><hr />


            </div>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-5 mx-auto'>
                {
                    cars.map(car => <CarCategoryCards key={car._id} carcategoryy={car}></CarCategoryCards>)
                }
            </div>


        </div>
    );
};

export default CarCategory;