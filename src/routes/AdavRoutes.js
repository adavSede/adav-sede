import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from '../App';

function AdavRoutes() {
    return (
    <BrowserRouter basename="/adav-sede">
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
    );
  }
  export default AdavRoutes;
  