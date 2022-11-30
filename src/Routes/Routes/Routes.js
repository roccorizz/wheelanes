import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import About from "../../Pages/About/About";

import CarCategory from "../../Pages/Home/AllCars/AllCars/CarCategory";
import SingleCarCard from "../../Pages/Home/AllCars/SingleCarCard/SingleCarCard";
import CarsByCategory from "../../Pages/Home/AllCars/AllCars/CarsByCategory";


import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/Signup/SignUp";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllBuyers from "../../Dashboard/AllUsers/AllBuyers";
import AllSeller from "../../Dashboard/AllUsers/AllSeller";
import MyWishlist from "../../Pages/Home/MyWishlist/MyWishlist";
import AddCar from "../../Dashboard/Dashboard/AddCar/AddCar";
import ManageCars from "../../Dashboard/Dashboard/ManageCars/ManageCars";
import Blog from "../../Pages/Home/Home/Blog/Blog";
import SellerRoute from "../SellerRoute/SellerRoute";


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
            },
            {
                path: '/mywishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },



            {
                path: '/featured-cars/:id',
                element: <SingleCarCard></SingleCarCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/featured-cars/${params.id}`)
            },
            {
                path: '/car-categories',
                element: <CarCategory></CarCategory>,
                loader: () => fetch(`http://localhost:5000/allcars`)
            },
            {
                path: '/allcars/:id',
                element: <CarsByCategory></CarsByCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/allcars/byCategory/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [

            {

                path: '/dashboard/allusers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {

                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {

                path: '/dashboard/addproduct',
                element: <SellerRoute><AddCar></AddCar></SellerRoute>
            },
            {

                path: '/dashboard/managecars',
                element: <SellerRoute><ManageCars></ManageCars></SellerRoute>
            }
            //         {

            //             path: '/dashboard',
            //             element: <MyAppointment></MyAppointment>
            //         },



            //         {

            //             path: '/dashboard/payment/:id',
            //             element: <AdminRoute><Payment></Payment></AdminRoute>,
            //             loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            //         }
        ]
    }
])