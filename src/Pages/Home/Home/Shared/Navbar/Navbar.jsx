import { Link } from "react-router-dom";

const Navbar = () => {



    const navOptions = <>
        <li className="hover:text-white"><Link to='/'>Home</Link></li>
        <li className="hover:text-white"><Link to='/menu'>Our Menu</Link></li>
        <li className="hover:text-white"><Link to='/order/salad'>Order Food</Link></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-25 bg-black max-w-screen-xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-sm menu-horizontal px-1 hover:text-white text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sm text-xs">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;