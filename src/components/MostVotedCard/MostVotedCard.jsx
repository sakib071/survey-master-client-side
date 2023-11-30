import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MostVotedCard = ({ data }) => {
    const { title, description, category, totalVotes, _id, surveyDeadline } = data;
    const axiosPublic = useAxiosPublic();

    const handleDetails = async () => {
        try {
            // Fetch the details of the specific survey
            const response = await axiosPublic.get(`/surveys/${_id}`);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching survey data:", error);
        }
    };

    return (
        <div className="card bg-base-100 mx-auto hover:shadow-md transition-all ease-in-out border-yellow-300 border-2">
            <div className="card-body w-96 h-52">
                <div className="flex justify-between">
                    <h2 className="card-title">{title}</h2>
                    <div className="badge badge-outline border-yellow-300 border-2 py-2 px-4 font-semibold">{category}</div>
                </div>
                <p className="text-sm">{description}</p>
                <div className="flex justify-between items-center">
                    <div className="text-sm border-0 font-semibold">Vote Count: <span className="font-bold text-yellow-400">{totalVotes}</span></div>
                    <div className="text-sm border-0 font-semibold">Deadline: {surveyDeadline}</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/surveyDetails/${_id}`}>
                        <button onClick={handleDetails} className="btn btn-sm btn-outline flex mx-auto">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MostVotedCard;
