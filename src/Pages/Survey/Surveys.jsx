import { useEffect, useState } from "react";
import SurveyCard from "../../components/SurveyCard/SurveyCard";

const Surveys = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://survey-master-server-gold.vercel.app/surveys')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching survey data:", error));
    }, []);

    return (
        <div className="pt-24 mb-10">
            <h2 className="text-3xl font-bold uppercase text-center mb-10 border-b-4 pb-1 border-yellow-300 w-48 mx-auto">All surveys</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    data.map((data) => (
                        <SurveyCard
                            key={data._id}
                            data={data}
                        ></SurveyCard>
                    ))
                }
            </div>

        </div>
    );
};

export default Surveys;
