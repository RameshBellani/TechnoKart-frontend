import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="App">
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchFilter />} />
        </Routes>
    </>
    </div>
  );
}

export default App;
