import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useVote from "../../hooks/useVote";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const SurveyList = () => {
    const [vote, , refetch] = useVote();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (vote) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/surveyList/${vote._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `${vote.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div className="min-h-screen pt-28 mb-5">
            <div>
                <div className="overflow-x-auto">
                    <table className="table mx-auto text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Comment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vote.map((vote, index) => <tr key={vote._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {vote.title}
                                    </td>
                                    <td className="">{vote.category}</td>
                                    <td className="">{vote.description}</td>
                                    <td className="">
                                        {vote.comment ?
                                            vote.comment : 'No comment'
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(vote)}
                                            className="btn btn-error btn-md">
                                            <FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default SurveyList;