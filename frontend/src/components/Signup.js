import React from 'react';

const Signup = () => {
    return (
        // first name
        // last name
        // username
        // password
        // verify password
        <form>
            <h1>sign up</h1>
            <input class="form-control" name="first-name" type="text" placeholder="input first name here" aria-label="first name" />
            <input class="form-control" name="last-name" type="text" placeholder="input last name here" aria-label="last name" />
            <input class="form-control" name="username" type="text" placeholder="input username here" aria-label="username" />
            <input class="form-control" name="password" type="text" placeholder="input password here" aria-label="password" />
            <input class="form-control" name="confirm-password" type="text" placeholder="verify password here" aria-label="confirm password" />

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Signup;
