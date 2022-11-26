import React from 'react';
import AllCars from '../AllCars/AllCars/AllCars';
import Banner from '../Banner/Banner';
import FeaturedCars from '../FeaturedCars/FeaturedCars';





const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <FeaturedCars />
            <AllCars />
        </div>
    );
};

export default Home;