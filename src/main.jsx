// in react index.js here main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chats from './Component/Chats.jsx'
import Home from './Component/Home.jsx'
import Routing from './Component/Routing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Chats/> */}
    {/* <Home/> */}
    <Routing/>
  </StrictMode>,
)
