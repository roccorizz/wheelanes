import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './BlogData';

const BlogDetails = (props) => {
    const { id } = useParams();
    const post = BlogData.find(post => post.id === Number(id));
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
            <div key={post.title}>
                <h1 className="text-2xl md:text-4xl text-cyan-500 font-bold mb-8">{post.title}</h1>
                <img src={post.imageDetailsCover} alt="Blog Post" className="mb-4 " />
                <p className="text-lg text-slate-300 mb-4">{post.content}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
