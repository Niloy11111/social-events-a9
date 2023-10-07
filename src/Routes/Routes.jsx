import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/Home/HomePage";


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
           
         
        ]
    }
])