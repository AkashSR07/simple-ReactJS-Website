import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './Components/AppRouter';

const rootElement = document.getElementById('root');

// Use createRoot to render the app in React 18
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
