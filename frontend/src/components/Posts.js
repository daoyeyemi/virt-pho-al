import React, { useEffect, useState } from 'react';

import IndividualPost from './IndividualPost.js';
import { Link } from 'react-router-dom';
import picture from '../images/new-balance-premiere-item.png';

const Posts = () => {

    const [posts, setPosts] = useState([{
        title: "",
        description: "",
        file: ""
    }])

    useEffect(() => {
        // "fetching" posts from backend endpoint '/posts'
        fetch("/posts")
            // .then(res => console.log(res))
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(jsonRes => setPosts(jsonRes));  
            // console.log(jsonRes)
            // console.log(posts)     
    })
    if (posts.title === "") {
        return (
            <div>
                <p>no posts yet...</p>
                <p>create one <Link to={"/create"}>here</Link></p>
            </div>
        )
    } else {
        return (
                <div>
                    {posts.map((yooo, index) =>
                        <IndividualPost post={yooo} key={index} />
                    )}            
                    {/* <div style={{ borderRadius : "5%", borderColor : 'gray' }}>
                        <div>
                            <img src={picture} alt="picture" />
                        </div>
                        <div>
                        <h2>title: a day on the beach</h2> 
                        </div>
                        <div>
                            <h2>description: i'm so happy today is a good day</h2>
                        </div>
                        <div>
                            <h2>1/11/22</h2>
                        </div>
                    </div> */}
                </div>
            );
    }
    
};

export default Posts;