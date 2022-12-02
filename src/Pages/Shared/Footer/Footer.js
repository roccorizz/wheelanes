import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-center">

                <div>
                    <span className="footer-title">Wheelanes</span>
                    <div className='grid grid-cols-2 gap-4'>

                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                    </div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;