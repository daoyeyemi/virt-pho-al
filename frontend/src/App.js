import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import IndividualPost from './components/IndividualPost';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Signup from './components/Signup';

const App = () => {
    const [globalUsername, setGlobalUsername] = useState(null);
    // const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        console.log(globalUsername);
    }, [globalUsername]);
    // new idea, bring back home page and say create, edit, or see posts
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={globalUsername == null ? <Login globalUsername={globalUsername} setGlobalUsername={setGlobalUsername} /> : <Posts globalUsername={globalUsername} setGlobalUsername={setGlobalUsername} />} />
                <Route exact path="/signup" element={<Signup setGlobalUsername={setGlobalUsername} />} />
                <Route exact path="/individualproduct" element={<IndividualPost setGlobalUsername={setGlobalUsername} />} />
                {/* <Route exact path="/posts" element={<Posts />} /> */}
                <Route exact path="/create" element={<CreatePost setGlobalUsername={setGlobalUsername} />} />
                <Route exact path="/edit/:id" element={<EditPost setGlobalUsername={setGlobalUsername} />} />
            </Routes>
        </Router>
    );
};

export default App;