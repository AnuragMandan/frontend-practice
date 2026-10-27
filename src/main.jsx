import { StrictMode } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Work from './Work.jsx'
import Pizza1 from './pizza/Pizza1.jsx'
import UseEffect from './components/UseEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/pizza" element={<Pizza1/>}/>
            <Route path="/useEffect" element={<UseEffect/>}/>


    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
