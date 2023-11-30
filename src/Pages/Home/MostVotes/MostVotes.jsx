import { useEffect, useState } from "react";
import MostVotedCard from "../../../components/MostVotedCard/mostVotedCard";

const MostVotes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/surveys')
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => b.totalVotes - a.totalVotes);
                const limitedData = sortedData.slice(0, 6);
                setData(limitedData);
            })
            .catch((error) => console.error("Error fetching survey data:", error));
    }, []);

    return (
        <div className="pt-24 mb-10">
            <h2 className="text-3xl font-bold uppercase text-center mb-10 border-b-4 pb-1 border-yellow-300 w-fit mx-auto">Most voted surveys</h2>
            <div className="grid grid-cols-3 gap-5">
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
