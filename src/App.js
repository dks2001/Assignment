import {
  BrowserRouter,
  Routes,
  Route,
  Link
}
  from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Page1 from './page1';
import Home from './Home';
import Page2 from './Page2';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/page1" element={<Page1 />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
