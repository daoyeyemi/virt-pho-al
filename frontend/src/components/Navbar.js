import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "10px 15% 10px 15%" }}>
            <div>
                <Link to={"/"}>Home</Link>
            </div>
            <div>
                <Link to={"/posts"}>Posts</Link>
            </div>
            <div>
                <Link to={"/create"}>Create</Link>
            </div>
        </nav>  
    );
};

export default Navbar;
