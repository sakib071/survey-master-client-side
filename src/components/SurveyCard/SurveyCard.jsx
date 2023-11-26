import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SurveyCard = ({ item }) => {
    const { title, description, category, totalVotes } = item;
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchSurveyData = async () => {
            try {
                const response = await axiosPublic.get('/surveys');
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching survey data:", error);
            }
        };

        fetchSurveyData();
    }, [axiosPublic]);

    const handleDetails = () => {
        // Your logic for adding to cart
    };

    return (
        <div className="card w-74 bg-base-100 mx-auto hover:shadow-md transition-all ease-in-out border-yellow-300 border-2">
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="text-sm h-12">{description}</p>
                <div className="card-actions flex justify-between items-center">
                    <div className="badge badge-outline border-yellow-300 border-2 py-2 px-4 font-semibold">{category}</div>
                    <div className="px-2 text-sm border-0 font-semibold">Vote Count: <span className="text-lg font-bold text-yellow-400">{totalVotes}</span></div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleDetails} className="btn btn-sm btn-outline mt-10  flex mx-auto">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SurveyCard;
