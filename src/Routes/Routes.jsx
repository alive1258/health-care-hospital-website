import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Main from '../layout/Main'
import Home from '../Pages/Home/Home/Home'
import About from '../Pages/About/About/About'
import Services from '../Pages/Services/Services/Services'
import FindDoctors from '../Pages/FindDoctors/FindDoctors/FindDoctors'
import DoctorsDetails from './../Pages/FindDoctors/DoctorDetails/DoctorsDetails'

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
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/doctors',
        element: <FindDoctors />,
      },
      {
        path: '/doctor-details/:detailsId',
        element: <DoctorsDetails />,
        loader: ({ params }) => fetch('/doctorsData.json'),
      },
    ],
  },
])
