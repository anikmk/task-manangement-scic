import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import SignUp from "../Page/SignUp";
import Login from "../Page/Login";
import ErrorPage from "../Page/ErrorPage";
import DasBoard from "../Layout/DashBoard/DasBoard";
import CreateNewTask from "../Page/DashBoard/CreateNewTask";
import SeePreviousTask from "../Page/DashBoard/SeePreviousTask";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        ]
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element:<Login></Login>
    },


    // dashboard
    {
        path:'dashboard',
        element:<DasBoard></DasBoard>,
        children:[
            {
                path:'createNewTask',
                element:<CreateNewTask></CreateNewTask>
            },
            {
                path:'seePreviousTask',
                element:<SeePreviousTask></SeePreviousTask>
            }
        ]
    }
])