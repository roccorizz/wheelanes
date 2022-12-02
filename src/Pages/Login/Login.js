import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet';
const Login = () => {
    const { loginUser, setLoading, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                fetch('https://wheelanes-server.vercel.app/jwt', {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //local storage is easy to use
                        localStorage.setItem('wheelanes', data.token);
                        localStorage.setItem('role', "buyer");
                        navigate(from, { replace: true });

                    })

            }
            )
            .catch((error) => {
                console.error(error);
            })

    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setError('');
                form.reset();
                toast.success('Login successfull')

                const currentUser = {
                    email: user.email
                }
                fetch('https://wheelanes-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        //local storage is easy to use
                        localStorage.setItem('wheelanes', data.token);
                        localStorage.setItem('role', data.user.role);
                        navigate(from, { replace: true });

                    })
            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg" style={{ height: '500px' }} alt=""></img>
                </div>
                <div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10">
                        <div className="card-body">
                            <h2 className='text-center font-bold text-2xl'>Login Now!</h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                    <h2 className='text-error'>{error}</h2>
                                </div>

                            </form>
                            <h6 className='text-center mt-5' style={{ fontSize: '18px' }}>Or, Login In with <button className="btn btn-outline btn-accent btn-sm" onClick={handleGoogleSignIn}>Google</button></h6>
                            <hr></hr>
                            <h6 className='text-center mt-5 mb-5'>Don't have an account? <Link to='/signup' className='text-accent font-bold'>Register</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;