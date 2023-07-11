import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './info';
import About from './about';
import Interests from './interests';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Info />
        <About />
        <Interests />
        <Footer />
  </React.StrictMode>
);
