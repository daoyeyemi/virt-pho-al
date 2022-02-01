import { Link, useNavigate, useParams } from 'react-router-dom';

import React from 'react';
import axios from 'axios';

const IndividualPost = ({ post }) => {
    
    const { id } = useParams();
    
    const history = useNavigate();

    const deletePost = async (id) => {

        await axios.delete(`/edit/${id}`);
        
        history("/posts");
    }

    return (
            <div>
                <h3>Title: {post.title}</h3>
                <h4>Description: {post.description}</h4>
                <Link to={`/edit/${post._id}`}>
                    <button className="btn btn-danger">Edit</button>
                </Link>
                    <button onClick={() => deletePost(post._id)} className="btn btn-warning">Delete</button>
            </div>
    );
};

export default IndividualPost;
