import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from '../01-useState/CounterApp'
import { CounterWithCustomHook } from '../01-useState/CounterWithCustomHook'
import { SimpleForm } from '../02.useEffect/SimpleForm'
import { FormWithCustomHook } from '../02.useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks'
import { FocusScreen } from '../04-useRef/FocusScreen'
import { Layout } from '../05-useLayoutEffect/Layout'
import { Memorize } from '../06-memo/Memorize'
import { MemoHook } from '../06-memo/MemoHook'
import { CallbackHook } from '../06-memo/Callbackhook'
import { Padre } from '../07-tarea-memo/Padre'
// import { Padre } from '../07-tarea-memo/Padre'
import "../08-useReduce/intro-reducer"
import { TodoApp } from '../08-useReduce/TodoApp'
import { MainApp } from '../09-useContext/MainApp'

import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <HooksApp />
      <CounterApp/>
      <CounterWithCustomHook/> */}
      {/* <SimpleForm/> */}
      {/* <FormWithCustomHook/> */}
      {/* <MultipleCustomHooks/> */}
      {/* <FocusScreen/> */}
      {/* <Layout/> */}
      {/* <Memorize/> */}
      {/* <MemoHook/> */}
      {/* <CallbackHook/> */}
      {/* <Padre /> */}
      {/* <TodoApp/> */}

      


      <MainApp/>
    </React.StrictMode>
  </BrowserRouter>
)
