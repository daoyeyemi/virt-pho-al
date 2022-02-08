import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import axios from 'axios';

const Signup = ({ setGlobalUsername }) => {

    const [user, setUser] = useState({
        first_name : "",
        last_name : "",
        username : "",
        password : "",
        confirm_password: ""
    })

    const history = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(user => {
            return {
                ...user,
                [name]: value
            }
        })
        console.log(user)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            password: user.password
        }

        axios.post("http://localhost:3001/signup", newUser);
        setGlobalUsername(newUser.username);
        history("/");
    }
    
    return (
        <>
            <header style={{ fontSize: "70px", textAlign: "center", margin: "100px auto 20px auto" }}>phojo</header>
            <h4 style={{ textAlign: 'center', fontColor: "gray" }}>your very own personal photo journal</h4>
            <h1 style={{ textAlign: 'center', margin: "30px auto" }}>sign up</h1>
            <form onSubmit={handleSubmit} style={{ width: "450px", margin: "10px auto" }}>
                <input onChange={handleChange} value={user.first_name} style={{ margin: "10px auto" }} name="first_name" className="form-control" type="text" placeholder="input first name here" aria-label="first name" required />
                <input onChange={handleChange} value={user.last_name} style={{ margin: "10px auto" }} name="last_name" className="form-control" type="text" placeholder="input last name here" aria-label="last name" required />
                <input onChange={handleChange} value={user.username} style={{ margin: "10px auto" }} name="username" className="form-control" type="text" placeholder="input username here" aria-label="username" required />
                <input onChange={handleChange} value={user.password} style={{ margin: "10px auto" }} name="password" className="form-control" type="password" placeholder="input password here" aria-label="password" required />
                <input onChange={handleChange} value={user.confirm_password} style={{ margin: "10px auto" }} name="confirm_password" className="form-control" type="password" placeholder="verify password here" aria-label="confirm password" required />
                <button style={{ width: "100%", margin: "2.5px auto" }} type="submit" className="btn btn-primary">Submit</button>
                <p style={{ textAlign: "center", margin: "15px" }}>already have an account? login <Link to={"/login"} style={{ textDecoration: 'none', fontColor: "red"}}>here</Link></p>
            </form>
        </>
    );
};

export default Signup;
