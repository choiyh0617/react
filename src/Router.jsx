import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/post1';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path='/posts/:id' element={<PostDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;