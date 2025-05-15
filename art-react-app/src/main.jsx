import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Pages/index.css'
import App from './Pages/App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
