import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


