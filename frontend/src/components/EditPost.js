import React, { useEffect, useState } from 'react';

// import { Post } from "../../models/postModel";
import { useParams } from 'react-router-dom';

const EditPost = () => {
    //  we need to take extract id # from url and use mongodb functions
    // to get entire collection data object from databse
    const [post, setPost] = useState({
        title: '',
        description: '',
        file: ''
    })

    const [clone, setClone] = useState({

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

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log("Submitted");
    // }

  return (
    <form>
        <div>
            <input onChange={handleChange} className="form-control" name="title" type="text" value={post.title} placeholder="input title here" aria-label="title" />
        </div>
        <div>
            <textarea onChange={handleChange} className="form-control" name="description" type="text" value={post.description} placeholder="input description here" rows="3"></textarea>
        </div>
        <div>
            {/* <FileBase64 
                multiple={false} 
                // base64 is the file name
                onDone={({ base64 }) => {
                    setPost({ ...post, file: base64 })
                    console.log(post)
                }} 
            /> */}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EditPost;
