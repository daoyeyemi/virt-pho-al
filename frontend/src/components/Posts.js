import React, { useEffect, useState } from 'react';

import IndividualPost from './IndividualPost.js';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar.js";
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
    });

    // if (posts) {
    //     return (
    //             <div>
    //                 {posts.map((yooo, index) =>
    //                     <IndividualPost post={yooo} key={index} />
    //                 )}            
    //                 {/* <div style={{ borderRadius : "5%", borderColor : 'gray' }}>
    //                     <div>
    //                         <img src={picture} alt="picture" />
    //                     </div>
    //                     <div>
    //                     <h2>title: a day on the beach</h2> 
    //                     </div>
    //                     <div>
    //                         <h2>description: i'm so happy today is a good day</h2>
    //                     </div>
    //                     <div>
    //                         <h2>1/11/22</h2>
    //                     </div>
    //                 </div> */}
    //             </div>
    //         );
    // } else {
        return (
            <>
                <Navbar /> 
                <div style={{ textAlign: "center", padding: "100px 10px", margin: "100px 10px" }}>
                    <h1>no posts just yet...</h1>
                    <h2>create one <Link to={"/create"} style={{ textDecoration: "none", color: "red" }}>here</Link></h2>
                </div>
            </>
           
        )
    }
    
// };

export default Posts;