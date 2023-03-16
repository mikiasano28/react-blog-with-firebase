import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreatePost from './componets/CreatePost';
import Home from './componets/Home';
import Login from './componets/Login';
import Logout from './componets/Logout';
import Navbar from './componets/Navbar';

import './App.css';



function App() {
  // check you are login or not..
  const [isAuth, setisAuth] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setisAuth}/>}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  )
}

export default App