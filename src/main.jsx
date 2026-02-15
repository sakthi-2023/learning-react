import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './Count.jsx'
import Onoff from './ToggleButton.jsx'
import Comp from './Comp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Count/> */}
    {/* <Onoff/> */}
    < Comp/>
  </StrictMode>,
)
