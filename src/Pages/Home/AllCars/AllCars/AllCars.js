import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AllCarCards from '../AllCarCards/AllCarCards';


const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars-bodytype')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])
    return (
        <div>
            <Helmet>
                <title>All Cars</title>
            </Helmet>
            <div id="service-hero" className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl text-base-200 font-bold">Select Cars by Catagory</h1>

                    </div>
                </div>
            </div>

            {console.log(cars)}

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                {
                    cars.map(car => <AllCarCards key={car._id} car={car}></AllCarCards>)
                }
            </div>


        </div>
    );
};

export default AllCars;