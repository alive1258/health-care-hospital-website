import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import { HelmetProvider } from 'react-helmet-async';
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelmetProvider> */}

    <div className="lg:max-w-[1920px] md:max-w-[1440px]  mx-auto bg-white ">
      <RouterProvider router={router} />
    </div>

    {/* </HelmetProvider> */}
  </React.StrictMode>
)
