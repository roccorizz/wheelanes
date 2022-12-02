import React, { useContext, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';

import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [userType, setUserType] = useState(null)
    useEffect(() => {
        const type = localStorage.getItem('role')
        if (type === "buyer") {
            setUserType(type)
        }

    }, [])
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li><Link to="/dashboard">My Dashboard</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allseller">All Sellers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>

                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/addproduct">Add a Car</Link></li>
                                <li><Link to="/dashboard/managecars">Manage Cars</Link></li>
                            </>
                        }
                        {
                            userType && <>
                                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;