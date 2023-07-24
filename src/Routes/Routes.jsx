import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Details from "../pages/Details/Details";
import AllCollege from "../pages/AllCollege/AllCollege";
import Admission from "../pages/Admission/Admission";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/allCollege',
        element: <AllCollege></AllCollege>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/colleges/:id',
        element: <Details></Details>,
        loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)

      }
    ]
  }
]);