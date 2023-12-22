import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const DasBoard = () => {
    const {user} = useAuth();
    console.log(user.email)
    return (
        <>
        <div className="flex">
            <div className="w-64 min-h-full text-white font-medium text-lg bg-[#3b2b79ec]">
            <div className=" flex text-center items-center justify-center">
            <div className="">
                <img className="w-24 m-auto rounded-full" src={user?.photoURL} />
                <h2 className="font-semibold py-2 text-lg"> {user.displayName} </h2>
                <h2> {user.email} </h2>
            </div>
            
            </div>
                <ul className="menu">
                    <li>
                    <NavLink to='/dashboard/createNewTask'>
                    Create New Task
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/seePreviousTask'> 
                    See Previous Task
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/taskManage'> 
                    Task Management
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/'>
                    Home
                    </NavLink>
                    </li>
                </ul>
            </div>

            {/* outlet */}
            <div className="flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default DasBoard;