import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allCollege'>Colleges</Link></li>
        <li><Link to='/admission'>Admission</Link></li>
        <li><Link to='/'>My College</Link></li>

    </>
    return (
        <div className="navbar  bg-blue-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-primary-content text-xl">Best Colleges</a>
            </div>
            <div className="navbar-center hidden lg:flex text-primary-content">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p className="text-primary-content font-bold mr-3">Hello, {user.displayName}</p>
                        <button onClick={handleLogOut} className="btn btn-outline text-primary-content  font-extrabold">Logout</button>
                    </> :
                        <>
                            <Link to='/login'><button className="btn btn-outline text-primary-content  font-extrabold">Login</button></Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;