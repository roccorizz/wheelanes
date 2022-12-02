import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import './SingleCarCard.css';
import { Helmet } from 'react-helmet';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import BookingModal from './BookingModal/BookingModal';
const SingleCarCard = () => {
    /*
_id
6389731bdfb014290427cffd
carName
"Audi A8"
origin
"Germany"
price
"4000"
resale_price
"3300"
years_of_used
"3"
carCategory
"3"
description
"jhfgaskjahfakfasfjksaf"
milespergallon
"23"
buyingyear
"2022-12-05"
company
"Audi"
image
"https://i.ibb.co/6wkTrbM/mercedes-1327610-1920.jpg"
condition
"Good"
status
"Active"
seller
"abdur@mia.com"
isFeatured
true*/
    const car = useLoaderData();
    const [cardetails, setCardetails] = useState('');
    const [userType, setUserType] = useState(null)
    const { carName, image, resale_price, price, milespergallon, years_of_used, buyingyear, origin, condition, company, description } = car;
    return (
        <div className='car-image backdrop-blur-lg'>
            <Helmet>
                <title>Car</title>
            </Helmet>
            <div className='mx-16 mb-20  '>
                <div className='mx-5 my-10 '>

                    <figure>
                        <PhotoProvider>
                            <div className='grid grid-cols-3 gap-4'>

                                <div className='col-span-2'>

                                    <PhotoView src={image}>
                                        <img src={image} className='mb-5' alt="" style={{ width: '100%', height: '500px' }} ></img>

                                    </PhotoView>
                                </div>
                                <div className='grid grid-rows-3  gap-10 mt-2'>

                                    <PhotoView src={image}>
                                        <img src={image} className='mb-5 rounded-2xl' alt="" style={{ width: '35%', height: '120px' }} ></img>

                                    </PhotoView>
                                    <PhotoView src={image}>
                                        <img src={image} className='mb-5 rounded-2xl' alt="" style={{ width: '35%', height: '120px' }} ></img>

                                    </PhotoView>
                                    <PhotoView src={image}>
                                        <img src={image} className=' rounded-2xl' alt="" style={{ width: '35%', height: '120px' }} ></img>

                                    </PhotoView>
                                </div>
                            </div>
                        </PhotoProvider>

                    </figure>


                </div>
                <h2 className='text-5xl font-bold mb-10 text-center capitalize text-white'>{carName}</h2>
                <div className='grid grid-cols-2'>
                    <h3 className='mb-5 text-2xl'><strong className='text-white'>Resale Price :</strong><span className='text-xl text-red-500 '> ${resale_price}</span></h3>
                    <h3 className='mb-5 text-2xl'><strong className='text-white'>Price :</strong><span className='text-xl text-red-500 '> ${price}</span></h3>
                    <h3 className='mb-5 '><strong className='text-2xl text-blue-500 font-semibold'>Miles per Gallon :</strong><span className='text-xl text-white '> {milespergallon}</span></h3>
                    <h3 className='mb-5 '><strong className='text-2xl text-blue-500 font-semibold'>Year of used :</strong> <span className='text-xl text-white '>{years_of_used}</span></h3>
                    <h3 className='mb-5 '><strong className='text-2xl text-blue-500 font-semibold'>Buying Year :</strong> <span className='text-xl text-white '>{buyingyear}</span></h3>
                    <h3 className='mb-5 '><strong className='text-2xl text-blue-500 font-semibold'>Origin :</strong> <span className='text-xl text-white '>{origin}</span></h3>
                    <h3 className='mb-5 '><strong className='text-2xl  text-blue-500 font-semibold'>Company :</strong> <span className='text-xl text-white'>{company}</span></h3>
                    <h3 className='mb-5 '><strong className='text-2xl  text-blue-500 font-semibold'>Condition :</strong> <span className='text-xl text-white'>{condition}</span></h3>

                </div>
                <h3 className='mb-5 '><strong className='text-2xl  text-blue-500 font-semibold'>Description :</strong> <span className='text-xl text-white'>{description}</span></h3>
                {localStorage.getItem('role') === "buyer" &&

                    <div className="card-actions justify-center">
                        <label

                            htmlFor="booking-modal"
                            className="btn text-white"
                            onClick={() => setCardetails(car)}
                        >Book Appointment</label>
                    </div>
                }

            </div>

            {
                cardetails &&
                <BookingModal
                    car={car}>

                </BookingModal>
            }
        </div>
    );
};

export default SingleCarCard;