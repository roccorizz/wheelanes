import React, { useContext, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../src/Contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [userType, setUserType] = useState(null)
    const location = useLocation();

    const logout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        const type = localStorage.getItem('role')
        if (type === "seller") {
            setUserType(type)
        }
    }, [])
    const menuItems = (


        <>
            <li li className={`font-semibold text-white rounded-lg  ${location.pathname === '/' ? 'active bg-cyan-500' : 'hover:bg-primary-500'}`}> <Link to='/'>Home</Link></li>
            <li className={`font-semibold text-white rounded-lg ${location.pathname === '/blog' ? 'active bg-cyan-500' : 'hover:bg-primary-500'}`}><Link to='/blog'>Blog</Link></li>
            {user && user.uid ? (
                <>
                    <li className={`font-semibold text-white rounded-lg ${location.pathname === '/dashboard' ? 'active bg-cyan-500' : 'hover:bg-primary-500'}`}><Link to="/dashboard">Dashboard</Link></li>
                    <li><button className='btn text-red-300' onClick={logout}>LogOut</button></li>
                </>
            )
                : (

                    <li className={`font-semibold text-white rounded-lg ${location.pathname === '/login' ? 'active bg-cyan-500' : 'hover:bg-primary-500'}`}><Link to='/login'>Login</Link></li>
                )
            }


        </>
    )



    return (

        <div className="navbar bg-gray-600 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {menuItems}
                </ul>
            </div>

        </div>






        // <div className="bg-base h-20 mb-12">
        //     <div className="container mx-auto px-4 flex justify-between items-center">
        //         <div className="flex items-center">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden mr-4">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul className="menu menu-horizontal lg:mr-6">
        //                 {menuItems}
        //             </ul>
        //         </div>
        //         <div className="hidden lg:block">
        //             <ul className="menu menu-horizontal flex items-center">
        //                 {menuItems}
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Header;
