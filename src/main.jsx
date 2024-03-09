import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import AuthProviders from './Providers/Providers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'> 
  <React.StrictMode>
    <AuthProviders>   
      <RouterProvider router={Router} />
    </AuthProviders>
  </React.StrictMode>,
  </div>
)
