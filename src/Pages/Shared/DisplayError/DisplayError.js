import React from 'react';
import { useRouteError } from 'react-router-dom';
import pagenotfound from '../../../assets/404/404.jpg'
const DisplayError = () => {
    const error = useRouteError();

    return (
        <div className=''>
            <div className='mx-10'>

                <img className='w-full h-[600px]' src={pagenotfound} alt=''></img>
            </div>
            <p className='text-red-500 text-3xl font-bold text-center'>{error.statusText || error.message}</p>

        </div>
    );
};

export default DisplayError;