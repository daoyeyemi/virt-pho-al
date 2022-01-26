import React from 'react';

const IndividualPost = ({ post }) => {
    return (
            <div>
                <h3>Title: {post.title}</h3>
                <h4>Description: {post.description}</h4>
            </div>
    );
};

export default IndividualPost;
