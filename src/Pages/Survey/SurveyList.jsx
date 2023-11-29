import useVote from "../../hooks/useVote";


const SurveyList = () => {
    const [vote] = useVote();


    return (
        <div className="min-h-screen">
            <div>
                <h3 className="text-3xl mt-1 mb-10 font-semibold">Vote History</h3>
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
                                <th>Status</th>
                                <th>Report</th>
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
                                        {vote.comment ? vote.comment : 'No comment'}
                                    </td>
                                    <td>
                                        {vote?.likeStatus ? vote.likeStatus : 'No Status'}
                                    </td>
                                    <td>
                                        {vote?.report ? vote.report : 'No report'}
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