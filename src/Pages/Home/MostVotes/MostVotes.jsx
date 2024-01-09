import { useEffect, useState } from "react";
import MostVotedCard from "../../../components/MostVotedCard/mostVotedCard";

const MostVotes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://survey-master-server-gold.vercel.app/surveys')
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => b.totalVotes - a.totalVotes);
                const limitedData = sortedData.slice(0, 6);
                setData(limitedData);
            })
            .catch((error) => console.error("Error fetching survey data:", error));
    }, []);

    return (
        <div className="pt-24 mb-10 max-w-7xl mx-auto">
            <h2 className="text-xl lg:text-3xl font-bold uppercase text-center mb-10 border-b-4 pb-1 border-yellow-300 w-fit mx-auto">Most voted surveys</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    data.map((data) => (
                        <MostVotedCard
                            key={data._id}
                            data={data}
                        ></MostVotedCard>
                    ))
                }
            </div>

        </div>
    );
};

export default MostVotes;
