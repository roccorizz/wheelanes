import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import blogData from './BlogData'
const Blog = () => {
    return (
        <div className=''>
            <h1 className="mt-10 mb-2 text-xl md:text-2xl lg:text-4xl text-cyan-500 font-bold md:text-left text-center">Blogs</h1><hr className='py-5' />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">

                {blogData.map(blog => (
                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-72 relative">
                            <div className="bg-gray-600 text-white font-bold text-xl p-2 absolute inset-x-0 bottom-0 bg-opacity-50 z-10">
                                {blog.title}
                            </div>
                            <div>
                                <img
                                    className="w-full h-72 hover:scale-110 transform transition-transform duration-500 ease-out"
                                    src={blog.imageUrl}
                                    alt="Random image"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;