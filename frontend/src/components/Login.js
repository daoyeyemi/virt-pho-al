import React from 'react';

const Login = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>login</h1>
            <form style={{ width: "450px", margin: "10px auto" }}> 
                <div>
                <input style={{ margin: "10px auto" }} class="form-control" name="username" type="text" placeholder="input username here" aria-label="username" />
                </div>
                <div>
                    <input style={{ margin: "10px auto" }} class="form-control" name="password" type="text" placeholder="input password here" aria-label="password" />
                </div>
                <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    
    );
};

export default Login;
