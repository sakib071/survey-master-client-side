import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { RiSurveyFill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";
import useVotes from "../hooks/useVotes";


const Dashboard = () => {
    const [vote] = useVotes();
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-gray-800 text-yellow-400 pt-10">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome className="text-white"></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils className="text-white"></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/votes">
                                    <FaBook className="text-white"></FaBook>
                                    Manage Votes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers className="text-white"></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome className="text-white"></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/surveyList">
                                        <FaCalendar className="text-white"></FaCalendar>
                                        Vote History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart className="text-white"></FaShoppingCart>
                                        My votes ({vote.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd className="text-white"></FaAd>
                                        Add a Review</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="text-white"></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/surveys">
                            <RiSurveyFill className="text-white" />
                            Surveys</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope className="text-white"></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;