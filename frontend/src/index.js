import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AudioPlayer from './AudioPlayer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AudioPlayer />
      </BrowserRouter>
  </React.StrictMode>
);
