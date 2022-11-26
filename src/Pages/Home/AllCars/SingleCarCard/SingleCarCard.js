import React from 'react';
import { useLoaderData } from 'react-router-dom';

import './SingleCarCard.css';
import { Helmet } from 'react-helmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';

/***Name
"chevrolet monte carlo"
Miles_per_Gallon
15
Cylinders
8
Displacement
400
Horsepower
150
Weight_in_lbs
3761
Acceleration
9.5
Year
1970
Origin
"USA"
company
"Toyota"
about
"Eu minim enim dolore cupidatat. Eu aliquip laborum non consectetur ani…"
bodyType
 */
const SingleCarCard = () => {
    const car = useLoaderData();
    const { Name, image, description, price, Miles_per_Gallon, Cylinders, Displacement, Horsepower, Acceleration, Year, Origin, company } = car;
    return (
        <div>
            <Helmet>
                <title>Featured Car</title>
            </Helmet>
            <div className='mx-20 mb-20'>
                <div className='mx-32 my-10 grid grid-cols-2 gap-3'>

                    <figure>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img src={image} className='mb-5' alt="" style={{ width: '100%', height: '350px' }} ></img>

                            </PhotoView>
                        </PhotoProvider>

                    </figure>
                    <figure>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img src={image} className='mb-5' alt="" style={{ width: '100%', height: '350px' }} ></img>
                            </PhotoView>
                        </PhotoProvider>

                    </figure>
                </div>
                <h2 className='text-4xl font-bold mb-5 text-center'>{Name}</h2>
                <div className='grid grid-cols-2'>
                    <h3 className='mb-5 text-2xl'><strong>Price :</strong> ${price}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Miles per Gallon :</strong> ${Miles_per_Gallon}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Cylinders :</strong> ${Cylinders}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Displacement :</strong> ${Displacement}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Horsepower :</strong> ${Horsepower}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Acceleration :</strong> ${Acceleration}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Year :</strong> ${Year}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Origin :</strong> ${Origin}</h3>
                    <h3 className='mb-5 '><strong className='text-2xl font-semibold'>Company :</strong> ${company}</h3>

                </div>
                <p style={{ fontSize: '18px' }}><strong>Description: </strong>{description}</p>
            </div>
        </div>
    );
};

export default SingleCarCard;