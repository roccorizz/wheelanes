import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-red-500 to-blue-400'>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;