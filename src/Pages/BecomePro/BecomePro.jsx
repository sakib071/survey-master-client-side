import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";


const BecomePro = () => {

    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    // console.log(user.email);

    const handlePro = user => {
        axiosSecure.patch(`/users/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    // refetch();
                    Swal.fire({
                        title: "Updated!",
                        text: `${user.name} is an admin now`,
                        icon: "success"
                    });
                }
            })
    }

    // const handleVote = event => {
    //     event.preventDefault();

    //     const email = user?.email;
    //     const displayName = user?.displayName;

    //     const addPro = {
    //         email,
    //         displayName
    //     };
    //     console.log(addPro);

    //     fetch('http://localhost:5000/users', {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(addPro)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 Swal.fire({
    //                     icon: "success",
    //                     title: "Subscription successful",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //                 navigate(location?.state ? location?.state : '/');
    //             }
    //         })
    //         .catch(err => {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops...",
    //                 text: "Something went wrong!"
    //             });
    //             console.log(err)
    //         })
    // }

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
                                <p className="font-bold text-yellow-400">PRO</p>
                            </div>
                            <div className="">
                                <label className="label label-text p-0" >Price</label>
                                <p className="font-bold text-yellow-400">$50</p>
                            </div>

                        </div>
                        <div className="form-control">
                            <button onClick={() => handlePro(user)} className="btn btn-sm w-1/2 mx-auto mt-10 first-letter: bg-yellow-300 text-black uppercase hover:bg-yellow-400 hover-bg-blue-600">Payment</button>

                        </div>
                    </div>
                </form>
            </div >
        </div>

    );
};

export default BecomePro;