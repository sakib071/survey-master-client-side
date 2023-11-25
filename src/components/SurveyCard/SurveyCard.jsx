import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SurveyCard = ({ item }) => {
    const { title, description, category } = item;
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

    const handleAddToCart = () => {
        // Your logic for adding to cart
    };

    return (
        <div className="card w-72 bg-base-100 mx-auto shadow border-yellow-300 border-2">
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="text-sm h-20">{description}</p>
                <div className="card-actions">
                    <div className="badge bg-yellow-300 shadow-md border-0 font-semibold">{category}</div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-sm btn-outline mt-10  flex mx-auto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SurveyCard;
