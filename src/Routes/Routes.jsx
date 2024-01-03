import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Main from '../layout/Main'
import Home from '../Pages/Home/Home/Home'
import About from '../Pages/About/About/About'
import Services from '../Pages/Services/Services/Services'
import FindDoctors from '../Pages/FindDoctors/FindDoctors/FindDoctors'
import DoctorsDetails from './../Pages/FindDoctors/DoctorDetails/DoctorsDetails'
import Contact from '../Pages/Contact/Contact/Contact'
import OnlineAppointment from '../Pages/Home/OnlineAppointment/OnlineAppointment'
import DetailsBlog from '../Pages/Services/OurBlogs/DetailsBlog'

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
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/online-appointment',
        element: <OnlineAppointment />,
      },
      {
        path: '/doctor-details/:detailsId',
        element: <DoctorsDetails />,
        loader: ({ params }) => fetch('/doctorsData.json'),
      },
      {
        path: '/blog-details/:detailsId',
        element: <DetailsBlog />,
        loader: ({ params }) => fetch('/blogData.json'),
      },
    ],
  },
])
