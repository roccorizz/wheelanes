import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['my_booking'],
        queryFn: async () => {
            const res = await fetch('https://wheelanes-server.vercel.app/bookings', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('wheelanes')} `
                }
            });
            const data = await res.json();
            return data;
        }
    });





    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Car Id</th>
                        <th>User Email</th>
                        <th>Amount</th>
                        <th>Meeting Location</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>{item.car_id}</th>
                                <td>{item.email}</td>
                                <td>{item.price}</td>
                                <td>{item.meeting_location}</td>
                                <td>{item.payment}</td>
                                <td>
                                    <Link to={'/dashboard/myorders/payment'} htmlFor="confirmation-modal" className="btn btn-success text-white mr-5">Pay</Link>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;