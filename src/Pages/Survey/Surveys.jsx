import { useEffect, useState } from "react";
import SurveyCard from "../../components/SurveyCard/SurveyCard";

const Surveys = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/surveys')
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching survey data:", error));
    }, []);

    return (
        <div className="pt-24 mb-10">
            <h2 className="text-3xl font-bold uppercase text-center mb-10 border-b-4 pb-1 border-yellow-300 w-48 mx-auto">All surveys</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    items.map((item) => (
                        <SurveyCard
                            key={item._id}
                            item={item}
                        ></SurveyCard>
                    ))
                }
            </div>

        </div>
    );
};

export default Surveys;
