
import React, { useContext } from 'react';

import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../Contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ car }) => {
    const { user } = useContext(AuthContext)
    const { _id, Name, price } = car;
    const navigate = useNavigate()

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value
        const booking = {
            car: Name,
            name: name,
            email,
            phone,
            price: price,
            car_id: _id,
            meeting_location: location,
            payment: "pending"
        }

        // ToDo: Send data to the server,and once data is saved then close the modal and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking Confirmed')
                    navigate('/dashboard/myorders')
                }
                else (
                    toast.error(data.message)
                )

            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{Name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered " />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered " />
                        <input name="number" type="number" defaultValue={price} disabled placeholder="" className="input input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered " />
                        <input name="location" type="text" placeholder="Enter Meeting Location" className="input input-bordered " />

                        <input className='btn btn-accent w-full' type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;