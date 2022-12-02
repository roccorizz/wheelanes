import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://wheelanes-server.vercel.app/users?role=seller');
            const data = await res.json();
            return data;
        }
    });



    const handleDelete = (user) => {
        fetch(`https://wheelanes-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('wheelanes')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${data.Name} deleted successfully`)
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;