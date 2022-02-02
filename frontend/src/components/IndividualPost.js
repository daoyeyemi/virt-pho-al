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
            <div style={{ width: "400px", margin: "10px auto 17px auto", border: "1.5px solid gray", borderRadius: "3%" }}>
                <div style={{ height: "200px", width: "100%" }}>

                </div>
                <h2 style={{ textAlign: "center" }}>{post.title}</h2>
                <h6 style={{ textAlign: "center" }}>{post.description}</h6>
                <div style={{ display: "flex", justifyContent: "space-evenly", width: "50%", margin: "0px auto", textAlign: "center" }}>
                    <div style={{ textAlign: "center", margin: "5px" }}>
                        <Link to={`/edit/${post._id}`}>
                            {/* <button className="btn btn-danger">Edit</button> */}
                            <i class="fa fa-pencil" aria-hidden="true" style={{ color: "black", fontSize: "30px", marginBottom: "10px" }}></i>

                        </Link>
                    </div>
                    <div style={{ textAlign: "center", margin: "5px" }}>
                        {/* <button onClick={() => deletePost(post._id)} className="btn btn-warning">Delete</button> */}
                        <i onClick={() => deletePost(post._id)} class="fa fa-times" aria-hidden="true" style={{ color: "red", fontSize: "30px", marginBottom: "10px" }}></i>

                    </div>
                </div>
                
            </div>
    );
};

export default IndividualPost;
