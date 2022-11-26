import React from 'react';
import AllCars from '../AllCars/AllCars/AllCars';
import Banner from '../Banner/Banner';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import Testimonials from '../Testimonials/Testimonials';





const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <FeaturedCars />
            <AllCars />
            <Testimonials />
        </div>
    );
};

export default Home;