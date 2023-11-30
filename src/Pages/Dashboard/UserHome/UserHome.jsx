import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`https://survey-master-server-gold.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data.role);
                console.log(data.role);
            })
    }, [user]);

    return (
        <div>
            <h2 className="text-2xl mt-8">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? <span className="font-semibold text-yellow-400">{user?.displayName}</span> : 'Back'
                }
            </h2>
            <div className="mt-10">
                <div className="max-w-xl rounded-md mx-auto text-center">
                    <form className="card-body card-side">
                        <div className="avatar">
                            <div className="w-32 h-32 rounded">
                                <img src={user?.photoURL} alt="User Profile Photo" />
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="w-full flex flex-col gap-5 text-left mx-auto justify-center">
                            <div className="">
                                <label className="label label-text p-0" >Name</label>
                                <p className="font-semibold">{user?.displayName}</p>
                            </div>
                            <div className="">
                                <label className="label label-text p-0" >Email</label>
                                <p className="font-semibold">{user?.email}</p>
                            </div>
                            <div className="flex justify-between text-lg">
                                <div className="">
                                    <label className="label label-text p-0" >Role</label>
                                    <p className="font-bold text-yellow-400">{userData}</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    );
};

export default UserHome;