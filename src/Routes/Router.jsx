import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import UserRegister from "../Page/UserRegister/UserRegister";
import BookService from "../Page/BookService/BookService";
import Bookings from "../Page/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../Page/About/About";
import Blogs from "../Page/Blogs/Blogs";
import ServicesHome from "../Page/ServicesDetails/ServicesHome/ServicesHome";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/services',
        element: <ServicesHome></ServicesHome>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <UserRegister></UserRegister>
      },
      {
        path: '/bookService/:id', 
        element:  <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/booking',
        element: <PrivateRoute>  <Bookings></Bookings>  </PrivateRoute>
      },

    ]
  },
]); 

export default Router;