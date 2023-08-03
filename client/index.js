import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ImageUploadForm from './test';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Router>
      <ImageUploadForm />
    </Router>
  </React.StrictMode>
);
