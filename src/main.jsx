import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './Count.jsx'
import Onoff from './ToggleButton.jsx'
import Comp from './Comp.jsx'
import Dropdown from './Dropdown.jsx'
import Once from './Once.jsx'
import Every from './Every.jsx'
import Changes from './StateChanges.jsx'
import React from './TwoStatesOneEffect.jsx'
import Logic from './DervivedLogic.jsx'
import Users from './APICall.jsx'
import LoopTrap from './LoopTrap.jsx'
import Infinite from './InfiniteLoop.jsx'
import Sync from './TitleSync.jsx'
import Clean from './CleanUpBasic.jsx'
import Display from './Display.jsx'
import Form from './Form.jsx'
import AppFile from './AppFile.jsx'
import { Children } from 'react'
import Login from './BrowserRouter/Login.jsx'
import Linking from './BrowserRouter/Linking.jsx'
import App1 from './BrowserRouter/App1.jsx'
import Store from './BrowserRouter/Store.jsx'
import Cart from './BrowserRouter/CartStore.jsx'
import Input from './UseRef/InputRef.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Count/> */}
    {/* <Onoff/> */}
    {/* < Comp/> */}
    {/* < Dropdown/> */}
    {/* <Once/> */}
    {/* <Every/> */}
    {/* < Changes/> */}
    {/* <React/> */}
    {/* <Clean/> */}
    {/* <Logic/> */}
    {/* <Users/> */}
    {/* <LoopTrap/> */}
    {/* <Infinite/> */}
    {/* <Sync/> */}
    {/* {<Clean />} */}
    {/* <Display/> */}
    {/* <Form /> */}
    {/* <AppFile/> */}
    {/* <Children /> */}
    {/* <AppFile/> */}
    {/* <Login /> */}
    {/* <Linking/> */}
    {/* <App1 /> */}
    {/* <Store/> */}
    {/* <Cart/> */}
    <Input/>
  </StrictMode>,
)
