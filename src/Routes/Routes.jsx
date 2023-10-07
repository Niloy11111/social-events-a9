import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
                path :'/details/:id',
                loader: () => fetch('data.json'),
                element : <ServiceDetails></ServiceDetails>,
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
           
         
        ]
    }
])