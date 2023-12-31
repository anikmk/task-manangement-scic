import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const {user,logOut} = useAuth();
  console.log(user)
  const handleLogOut = () => {
    logOut()
    .then(()=>{
      console.log('logout')
    })
  }
  const navItems = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link>About</Link></li>
      <li><Link to='/dashboard/createNewTask'>Dashboard</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-300">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navItems}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Task</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navItems}
      </ul>
    </div>
    <div className="navbar-end">
      {
        user ? <button onClick={handleLogOut} className="bg-[#3b2b79ec] py-3 px-5 text-white font-semibold rounded-lg hover:bg-transparent hover:border hover:text-black hover:border-[#3b2b79ec]">Log Out</button> :
        <Link to='/signup'>
        <a className="btn">Register</a>
        </Link>
      }
    </div>
  </div>
  );
};

export default NavBar;
