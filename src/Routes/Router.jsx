import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import UserRegister from "../Page/UserRegister/UserRegister";
import BookService from "../Page/BookService/BookService";
import Bookings from "../Page/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        element: <BookService></BookService>,
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