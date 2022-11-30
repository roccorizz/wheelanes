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
                const res = await fetch('http://localhost:5000/allcars', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')} `
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteCar = car => {
        fetch(`http://localhost:5000/allcars/${car._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${car.Name} deleted successfully`)
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
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Body Type</th>
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
                                <td>{car.Name}</td>
                                <td>{car.bodyType}</td>
                                <td>
                                    <label onClick={() => setdeletingCar(car)} htmlFor="confirmation-modal" className="btn btn-error text-white">Delete</label>
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