import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import SingleCarCard from "../../Pages/Home/AllCars/SingleCarCard/SingleCarCard";


import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/Signup/SignUp";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/about',
                element: <About />
            }, {
                path: '/featured-cars/:id',
                element: <SingleCarCard></SingleCarCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/featured-cars/${params.id}`)
            },
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <DisplayError></DisplayError>,
    //     children: [
    //         {

    //             path: '/dashboard',
    //             element: <MyAppointment></MyAppointment>
    //         },
    //         {

    //             path: '/dashboard/allusers',
    //             element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
    //         },
    //         {

    //             path: '/dashboard/adddoctor',
    //             element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
    //         },
    //         {

    //             path: '/dashboard/managedoctors',
    //             element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
    //         },
    //         {

    //             path: '/dashboard/payment/:id',
    //             element: <AdminRoute><Payment></Payment></AdminRoute>,
    //             loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
    //         }
    //     ]
    // }
])