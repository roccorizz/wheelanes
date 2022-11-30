import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Pages/Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddCar = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller');
            const data = await res.json();
            return data;
        }
    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const { data: carCategories, isLoading } = useQuery({
        queryKey: ['bodyType'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/car-categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddCar = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    let carName = data.Name;
                    const car = {
                        name: carName,
                        location: data.Origin,
                        resaleprice: data.resaleprice,
                        bodytype: data.bodyType,
                        price: data.price,
                        yearsofuse: data.yearsofuse,
                        sellername: {
                            users?.map((user, i) =>
{ user.name })
                        },
milespergallon: data.Miles_per_Gallon,
    cylinders: data.cylinders,
        buyingyear: data.Year,


            image: imgData.data.url
                    }
//save doctor information to the database
fetch('http://localhost:5000/allcars', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify(car)

})
    .then(res => res.json())
    .then(result => {
        console.log(result);
        toast.success(`${carName} is added successfully`);
        navigate('/dashboard/managecars')
    })
                }
            })
    }
if (isLoading) {
    return <Loading></Loading>
}
return (
    <div className='w-96 p-7 border'>
        <h2 className='text-4xl'>Add a Car</h2>
        <form onSubmit={handleSubmit(handleAddCar)} >

            <div className="form-control w-full max-w-xs">

                <label className="label">
                    <span className="label-text">Name</span>

                </label>
                <input type="text" {...register("firstName", {
                    required: "First Name is required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.Name && <p className='text-red-600'>{errors.Name?.message}</p>}
            </div>


            <div className="form-control w-full max-w-xs">

                <label className="label">
                    <span className="label-text">Body Type</span>
                </label>
                <select
                    {...register('carCategory')}
                    className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Please select a Category</option>
                    {
                        carCategories.map(car => <option
                            key={car._id}
                            value={car.bodyType}
                        >{car.bodyType}</option>)
                    }
                </select>

            </div>
            <div className="form-control w-full max-w-xs">

                <label className="label">
                    <span className="label-text">Photo</span>

                </label>
                <input type="file" {...register("image", {
                    required: "Photo is required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
            </div>



            <input className='btn btn-accent w-full text-white my-4' value="Add Doctor" type="submit" />

        </form>
    </div>
);
};

export default AddCar;