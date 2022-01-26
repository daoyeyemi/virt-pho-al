import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/posts"}>Posts</Link>
            <Link to={"/create"}>Create</Link>
        </nav>  
    );
};

export default Navbar;
