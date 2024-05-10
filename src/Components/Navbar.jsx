import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import logo from '../assets/image/logo.png'
const Navbar = () => {
    const {user,logOut }= useContext(AuthContext)


const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light')

useEffect(()=>{
 localStorage.setItem('theme',theme)
 const localTheme = localStorage.getItem('theme')
document.querySelector('html').setAttribute('data-theme',localTheme)

},[theme])




const handleToggle = (e) =>{

  if(e.target.checked){
    setTheme('dark')
  }
  else{
    setTheme('light')
  }
}

    const link = <>
<div className="flex  flex-col text-[15px] lg:flex-row" id="sidebar">
<li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/queries'}>Queries</NavLink></li>
   {
    user && <>
     <li><NavLink to={'/recommendationsforme'}>Recommendations For Me</NavLink></li>
    <li><NavLink to={'/myqueries'}>My Queries</NavLink></li>
    <li><NavLink to={'/myrecommendations'}>My recommendations</NavLink></li>
    </>
   }

<li> <div className=" md:hidden">
   <label className="cursor-pointer grid place-items-center">
  <input
  onChange={handleToggle}
   type="checkbox"
    
     className="toggle
      theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>

  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
   </div></li>


</div>
    </>

const handleLogout = () =>{
    logOut()
    .then()
    .catch()
  }
  

    return (

        <div className="navbar bg-blue-200 md:px-10 h-20 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {link}
      </ul>
    </div>

    <div className="flex items-center gap-0">
        <img className="w-20" src={logo} alt="" />
    <Link to={'/'} className="font-extrabold text-4xl">ProAlter</Link>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="hidden mr-3 md:inline-block">
   <label className="cursor-pointer grid place-items-center">
  <input
  onChange={handleToggle}
   type="checkbox"
    
     className="toggle
      theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>

  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
   </div>
  {
  user ?<>
  <div>
  <button
          onClick={handleLogout}
          className="btn p-1 text-[12px] md:text-[17px] md:p-4 bg-[#990000] hover:bg-[#7a1c1c] text-[#ecf0f1]">Logout</button>
  </div>
  </>
    :
    <Link to='/login'>
      <button className="btn  bg-[#990000] hover:bg-[#7a1c1c] text-[#ecf0f1]">Login</button>
    </Link>
}
  </div>
</div>
    );
};

export default Navbar;