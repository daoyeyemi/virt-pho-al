import { Link } from 'react-router-dom';
import React from 'react';
const IndividualPost = ({ post }) => {
    return (
            <div>
                <h3>Title: {post.title}</h3>
                <h4>Description: {post.description}</h4>
                <Link to={`/edit/${post._id}`}>
                    <button className="btn btn-danger">Edit</button>
                </Link>
            </div>
    );
};

export default IndividualPost;
