import React from 'react';

const Login = () => {
    return (
        <form> 
            <h1>login</h1>
            <input class="form-control" name="username" type="text" placeholder="input username here" aria-label="username" />
            <input class="form-control" name="password" type="text" placeholder="input password here" aria-label="password" />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Login;
