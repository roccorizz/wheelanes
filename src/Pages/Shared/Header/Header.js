import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../src/Contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [userType, setUserType] = useState(null)
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

    const menuItems = <>
        <li className='font-semibold text-blue-400 text-xl '><Link to='/'>Home</Link></li>
        <li className='font-semibold text-blue-400'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-semibold text-blue-400'><Link to="/dashboard">Dashboard</Link></li>
                    {
                        !isSeller && !isAdmin && <>
                            <li className='font-semibold text-blue-400'><Link to='/mywishlist'>My Wishlist</Link></li>
                        </>
                    }

                    <li className='font-semibold'><Link className='btn btn-outline btn-error' onClick={logout}>LogOut</Link></li>

                </> :
                <>
                    <li className='font-semibold text-blue-400'><Link to='/login'>Login</Link></li>
                </>
        }


    </>
    return (
        <div className="navbar bg-base  h-20 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;