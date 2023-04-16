import React from 'react';

import CarCategory from '../AllCars/AllCars/CarCategory';
import Banner from '../Banner/Banner';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import Testimonials from '../Testimonials/Testimonials';





const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <FeaturedCars />
            <CarCategory />
            <Testimonials />
        </div>
    );
};

export default Home;