import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primeicons/primeicons.css';
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
  </StrictMode>,
)
