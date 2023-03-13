import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from './Home';
import AddTrip from './Add';
import ListTrip from './Trips';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="add" element={<AddTrip/>} />
    <Route path="list" element={<ListTrip/>} />
  </Routes>
</BrowserRouter>
);
