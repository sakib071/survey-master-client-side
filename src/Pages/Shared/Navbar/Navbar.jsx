import { Link } from "react-router-dom";

const Navbar = () => {



    const navOptions = <>
        <li className=""><Link to='/'>Home</Link></li>
        <li className=""><Link to='/surveys'>Surveys</Link></li>
        <li className=""><Link to='/login'>Login</Link></li>
        <li className="font-semibold rounded-md text-black bg-yellow-300 border-0 transition-all ease-in-out"><Link to='/becomePro'>Become a <span className="font-bold">PRO</span></Link></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-white max-w-screen-xl mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className=" normal-case text-xl font-bold text-yellow-400">Survey <span className="text-black">Master</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-sm menu-horizontal gap-6 text-sm px-1 text-black font-semibold items-center">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;