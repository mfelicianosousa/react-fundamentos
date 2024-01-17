
import { createRoot } from 'react-dom/client'
import './index.css'
//import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

const root = createRoot(document.getElementById('root')) ;
//const container = document.getElementById('app');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(...);
root.render(
       <App />,  
      // document.getElementById('root')  
     )

