import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './header.js';
import { Content } from './content.js';
import { Footer } from './footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Header />
        <Content />
        <Footer />
  </React.StrictMode>
);
