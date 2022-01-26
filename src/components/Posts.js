import React, { useEffect, useState } from 'react';

import IndividualPost from './IndividualPost.js';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([{
        title: "",
        description: "",
        file: ""
    }])

    useEffect(() => {
        fetch("/posts")
            // .then(res => console.log(res))
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(jsonRes => setPosts(jsonRes));  
            console.log(posts)     
    })

    return (
        <div>
            <p>no posts yet...</p>
            <p>create one <Link to={"/create"}>here</Link>
            </p>

            {posts.map((yooo, index) =>
                <IndividualPost post={yooo} key={index} />
            )}            
        </div>
    );
};

export default Posts;