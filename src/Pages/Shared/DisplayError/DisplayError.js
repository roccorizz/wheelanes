import React from 'react';
import { useRouteError } from 'react-router-dom';
import pagenotfound from '../../../assets/404/404.jpg'
const DisplayError = () => {
    const error = useRouteError();

    return (
        <div className='align-center'>
            <img className='w-2/3 ' src={pagenotfound} alt=''></img>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>

        </div>
    );
};

export default DisplayError;