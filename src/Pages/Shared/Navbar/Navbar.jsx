import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import signOut from "../../../assets/logout.png";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();


    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>

        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-4 pb-1 transition-all ease-in-out border-yellow-300" : "font-semibold"
            }>
            Home
        </NavLink>
        <NavLink to={user ? "/surveys" : "/login"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-4 pb-1 transition-all ease-in-out border-yellow-300" : "font-semibold"
            }>
            Surveys
        </NavLink>
        <NavLink to={user ? "/becomePro" : "/login"}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-4 pb-1 transition-all ease-in-out border-yellow-300" : "font-semibold rounded-md text-black bg-yellow-300 border-0 transition-all ease-in-out px-2 py-1"
            }>
            Become a <span className="font-bold">PRO</span>
        </NavLink>
        {
            user && isAdmin && <li className=""><NavLink to='/dashboard/adminHome'>Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <span className="font-semibold text-black hover:text-yellow-500 transition-all ease-in-out"><NavLink to='/dashboard/userHome'>Dashboard</NavLink></span>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-white max-w-full mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className=" normal-case lg:text-xl font-bold text-yellow-400">Survey <span className="text-black">Master</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-sm menu-horizontal gap-6 text-sm px-1 text-black font-semibold items-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal gap-6 text-sm px-1 text-black font-semibold items-center">
                        <li className="">
                            {
                                user ? <div className="flex items-center space-x-4">
                                    <span className="ml-4">{user?.displayName}</span>
                                    <div className="avatar">
                                        <div className="w-8 rounded">
                                            <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                    <img onClick={handleLogOut} className="w-5 hover:w-[22px] transition-all ease-in-out cursor-pointer" src={signOut} alt="" />
                                </div> : <>
                                    <li className="hover:text-yellow-300 hover:bg-gray-800 font-bold btn btn-sm bg-yellow-300">
                                        <Link to='/login'>Login</Link>
                                    </li>
                                </>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;