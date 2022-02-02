import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "10px 10% 10px 10%" }}>
            <div>
                <h2 style={{ margin: "14px 10px 10px 10px", fontSize: "37px" }}>
                    phojo
                </h2>
            </div>
            <div style={{ textAlign: 'right', display: "flex", justifyContent: "space-between" }}>
                <div style={{ margin: "9px 5px 5px 5px" }}>
                    <Link to={"/"}>
                        <i class="fa fa-home" aria-hidden="true" style={{ color: "black", fontSize: "45px" }}></i>
                    </Link>
                </div>
                <div style={{ margin: "11.5px 5px 5px 5px" }}>
                    <Link to={"/posts"}>
                        <i class="fa fa-sticky-note" aria-hidden="true" style={{ color: "black", fontSize: "38px" }}></i>
                    </Link>
                </div>
                <div style={{ margin: "11.5px 5px 5px 5px" }}>
                    <Link to={"/create"}>
                        <i class="fa fa-pencil-square-o" aria-hidden="true" style={{ color: "black", fontSize: "40px" }}></i>
                    </Link>
                </div>
            </div>
            
        </nav>  
    );
};

export default Navbar;
