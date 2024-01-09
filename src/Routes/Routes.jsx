import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Surveys from "../Pages/Survey/Surveys";
import SurveyDetails from "../Pages/Survey/SurveyDetails";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SurveyList from "../Pages/Survey/SurveyList";
import BecomePro from "../Pages/BecomePro/BecomePro";
import Dashboard from "../Layout/Dashboard";
import AddSurvey from "../Pages/Dashboard/AddSurvey/AddSUrvey";
import Payment from "../Pages/BecomePro/Payment";
import PrivateRoute from "../providers/PrivateRoute";
import AdminRoute from "../providers/AdminRoute";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUser";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Review from "../Pages/Dashboard/Review/Review";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/surveys',
                element: <PrivateRoute><Surveys></Surveys></PrivateRoute>
            },
            {
                path: '/surveyDetails/:_id',
                element: <PrivateRoute><SurveyDetails></SurveyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://survey-master-server-gold.vercel.app/surveys/${params._id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/becomePro',
                element: <PrivateRoute><BecomePro></BecomePro></PrivateRoute>,
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    },
    {

        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'addVote',
                element: <AdminRoute><AddSurvey></AddSurvey></AdminRoute>
            },
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'surveyList',
                element: <SurveyList></SurveyList>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);