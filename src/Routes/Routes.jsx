import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Book from "../PrivateRoute/Contact";
import Articles from "../PrivateRoute/Articles";




export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                loader: () => fetch('data.json'),
                element : <HomePage></HomePage>
            },
            {
                path :'/serviceDetails/:id',
                loader: () => fetch('data.json'),
                element : <PrivateRoute> <ServiceDetails></ServiceDetails></PrivateRoute>,
            },
            {
              path : '/contact',
              element : <PrivateRoute> <Book></Book>  </PrivateRoute>  
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : "/details",
                element : <PrivateRoute><Articles></Articles> </PrivateRoute>
            }
           
         
        ]
    }
])