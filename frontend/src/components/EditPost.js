import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FileBase64 from 'react-file-base64';
import axios from 'axios';

const EditPost = () => {
    //  we need to take extract id # from url and use mongodb functions
    // to get entire collection data object from databse
    const [post, setPost] = useState({
        title: '',
        description: '',
        file: ''
    })

    const { id } = useParams();

    useEffect(() => {
        fetch(`/edit/${id}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(jsonRes => setPost(jsonRes));
    }, []);
    
    // setClone(post);
    const history = useNavigate(); 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setPost({
            ...post,
            [name] : value
        })
        console.log(post)
    }

    // const loadPostDetails = async() => {
    //     // const response = await getPosts(id);
    //     // setUser(resp)
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        const editedPost = {
            title : post.title,
            description : post.description,
            file : post.file
        }

        console.log("Submitted");

        axios.put(`http://localhost:3001/edit/${id}`, editedPost);

        history("/posts")
    }

  return (
        <form onSubmit={handleSubmit} style={{ width: "450px", margin: "10px auto" }}>
            <div>
                <input style={{ margin: "10px auto" }} onChange={handleChange} className="form-control" name="title" type="text" value={post.title} placeholder="input title here" aria-label="title" />
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
            </div>
            <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
        </form>
  );
};

export default EditPost;
