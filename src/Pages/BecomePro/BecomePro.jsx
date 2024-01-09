import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const BecomePro = () => {
    const { user } = useContext(AuthContext);
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
        <div className="h-[70vh] pt-28">
            <div className="max-w-md border-2 rounded-md mx-auto text-center">
                <h3 className="text-3xl font-bold m-5">Become a <span className="text-yellow-400">PRO</span></h3>
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
                            <div className="">
                                <label className="label label-text p-0" >Price</label>
                                <p className="font-bold text-yellow-400">$50</p>
                            </div>

                        </div>
                        <div className="form-control">
                            <Link to='/payment'>
                                <button className="btn btn-sm w-1/2 mx-auto mt-10 first-letter: bg-yellow-300 text-black uppercase hover:bg-yellow-400 hover-bg-blue-600">Payment</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div >
        </div>

    );
};

export default BecomePro;