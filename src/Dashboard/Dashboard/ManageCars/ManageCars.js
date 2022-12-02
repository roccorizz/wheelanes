import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading/Loading';

import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';

const ManageCars = () => {
    const [deletingCar, setdeletingCar] = useState(null);
    const closeModal = () => {
        setdeletingCar(null);
    }

    const { data: cars, isLoading, refetch } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            try {
                const res = await fetch('https://wheelanes-server.vercel.app/allcars', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('wheelanes')} `
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteCar = id => {
        fetch(`https://wheelanes-server.vercel.app/allcars/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('wheelanes')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` Data deleted successfully`)
                }
                console.log(data)
            })
    }


    const handleUpdate = id => {
        fetch(`https://wheelanes-server.vercel.app/allcars/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('wheelanes')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refetch();
                    toast.success(`Data updates successfully`)
                }
                console.log(data)
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Cars: {cars?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>S/L</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cars.map((car, i) => <tr key={car._id}>


                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={car.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{car.carName}</td>
                                <td>{car.status}</td>
                                <td>

                                    <button disabled={car.isFeatured ? true : false} onClick={() => handleUpdate(car._id)} htmlFor="confirmation-modal" className="btn btn-success text-white mr-5">Set Featured</button>

                                    <button onClick={() => handleDeleteCar(car._id)} htmlFor="confirmation-modal" className="btn btn-error text-white">Delete</button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingCar && <ConfirmationModal
                    title={'Are you sure you want to delete?'}
                    message={`If you delete ${deletingCar.Name}, It can not be undone!`}
                    successAction={handleDeleteCar}
                    successButtonName="Delete"
                    modalData={deletingCar}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageCars;