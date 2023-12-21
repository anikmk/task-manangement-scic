import { NavLink, Outlet } from "react-router-dom";



const DasBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
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
    );
};

export default DasBoard;