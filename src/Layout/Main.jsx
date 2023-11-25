import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
// import Footer from "../pages/Shared/Footer/Footer";
// import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    // const location = useLocation();
    // console.log(location);
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {/* {noHeaderFooter || <Navbar></Navbar>} */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main; 