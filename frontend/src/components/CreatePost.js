import React, { useEffect, useState } from 'react';

import FileBase64 from 'react-file-base64';
import Navbar from "./Navbar.js";
import axios from 'axios';
import picture from '../images/new-balance-premiere-item.png';
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const [post, setPost] = useState({
        title: '',
        description: '',
        file: ''
    });

    useEffect(() => {
        // console.log(post)
        console.log("reset")
    },[post]);

    const history = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // [name] turns name into a variable
        setPost({
            ...post,
            [name] : value
        })
        console.log(post);
    }

    const handleSubmit = (event) => {
        // prevents input from being cleared
        event.preventDefault();
        console.log(post);

        const newPost = {
            title: post.title,
            description: post.description,
            file: post.file
        }
        // proxy server is gateway between user and the internet
        // separates users from websites they browse
        axios.post("http://localhost:3001/create", newPost);

        history("/posts");
    }

    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>create</h1>
            <form onSubmit={handleSubmit} style={{ width: "450px", margin: "10px auto" }}>
                <div>
                    <input style={{ margin: "10px auto" }} onChange={handleChange} className="form-control" name="title" type="text" value={post.title} placeholder="input title here" aria-label="author" />
                </div>
                <div>
                    <textarea style={{ margin: "10px auto" }} onChange={handleChange} className="form-control" name="description" type="text" value={post.description} placeholder="input description here" rows="6"></textarea>
                </div>
                <div style={{ margin: "10px auto" }}>
                    <FileBase64 
                        multiple={false} 
                        // base64 is the file name
                        onDone={({ base64 }) => {
                            setPost({ ...post, file: base64 })
                            console.log(post)
                        }} 
                    />
                    <button style={{ margin: "10px auto", width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
        

    );
};

export default CreatePost;