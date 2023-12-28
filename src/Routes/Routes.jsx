import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Main from '../layout/Main'
import Home from '../Pages/Home/Home/Home'
import About from '../Pages/About/About/About'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
