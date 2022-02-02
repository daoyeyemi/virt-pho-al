import React from 'react';

const Signup = () => {
    
    const handleChange = () => {
           
    }

    const handleSubmit = () => {

    }
    
    return (
       
        <>
            <h1 style={{ textAlign: 'center', marginBottom: "15px" }}>sign up</h1>
            <form style={{ width: "450px", margin: "10px auto" }}>
                <input style={{ margin: "10px auto" }} class="form-control" name="first-name" type="text" placeholder="input first name here" aria-label="first name" />
                <input style={{ margin: "10px auto" }} class="form-control" name="last-name" type="text" placeholder="input last name here" aria-label="last name" />
                <input style={{ margin: "10px auto" }} class="form-control" name="username" type="text" placeholder="input username here" aria-label="username" />
                <input style={{ margin: "10px auto" }} class="form-control" name="password" type="text" placeholder="input password here" aria-label="password" />
                <input style={{ margin: "10px auto" }} class="form-control" name="confirm-password" type="text" placeholder="verify password here" aria-label="confirm password" />
                <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
        
    );
};

export default Signup;
