import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './views/index';
import App from './views/index';

createRoot(document.getElementById('container')).render(<App />);
