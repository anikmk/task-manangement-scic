import { NavLink, Outlet } from "react-router-dom";



const DasBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li>
                    <NavLink to='/dashboard/allUser'>
                    All Users
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/createNewTask'> 
                    create task
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/manageItems'> 
                    Manage Items
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/bookings'> 
                    Manage Bookings
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/users'>
                    All users
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