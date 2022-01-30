import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import IndividualPost from './components/IndividualPost';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import React from 'react';
import Signup from './components/Signup';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/individualproduct" element={<IndividualPost />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="/create" element={<CreatePost />} />
                <Route exact path="/edit/:id" element={<EditPost />} />
            </Routes>
        </Router>
    );
};

export default App;