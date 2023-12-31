import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import SignUp from "../Page/SignUp";
import Login from "../Page/Login";
import ErrorPage from "../Page/ErrorPage";
import DasBoard from "../Layout/DashBoard/DasBoard";
import CreateNewTask from "../Page/DashBoard/CreateNewTask";
import SeePreviousTask from "../Page/DashBoard/SeePreviousTask";
import TaskManage from "../Page/DashBoard/TaskManage";
import UpdatedTask from "../Page/DashBoard/UpdatedTask";
import PrivetRoute from "./PrivetRoute";
import About from "../Page/About/About";


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
            {
                path:'/about',
                element:<About></About>
            }
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
        element:<PrivetRoute><DasBoard></DasBoard></PrivetRoute>,
        children:[
            {
                path:'createNewTask',
                element:<CreateNewTask></CreateNewTask>
            },
            {
                path:'seePreviousTask',
                element:<SeePreviousTask></SeePreviousTask>
            },
            {
                path:'taskManage',
                element:<TaskManage></TaskManage>
            },
            {
                path:'updateTask',
                element:<UpdatedTask></UpdatedTask>
            }
        ]
    }
])