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
            <div style={{ width: "400px", margin: "5px auto", border: "1.5px solid gray", borderRadius: "3%" }}>
                <div style={{ height: "200px", width: "100%" }}>

                </div>
                <h3 style={{ textAlign: "center" }}>Title: {post.title}</h3>
                <h4 style={{ textAlign: "center" }}>Description: {post.description}</h4>
                <div style={{ display: "flex", textAlign: "center" }}>
                    <div style={{ textAlign: "center", margin: "5px" }}>
                        <Link to={`/edit/${post._id}`}>
                            <button className="btn btn-danger">Edit</button>
                        </Link>
                    </div>
                    <div style={{ textAlign: "center", margin: "5px" }}>
                        <button onClick={() => deletePost(post._id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
                
            </div>
    );
};

export default IndividualPost;
