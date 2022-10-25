import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';

import Navbar from '../Navbar';

function index() {
  return (
    <div>
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/'  element={<Home/>}></Route>
                <Route path='/profil'  element={<Profil/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default index