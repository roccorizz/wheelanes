import React from 'react';
import blogData from './BlogData';
const BlogDetails = ({ title, content, imageUrl } = blogData) => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <img src={imageUrl} alt="Blog Post" className="mb-4" />
            <p className="text-3xl font-bold mb-4">{content}</p>
        </div>
    );
};

export default BlogDetails;
