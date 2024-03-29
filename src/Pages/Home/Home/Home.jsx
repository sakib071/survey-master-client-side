import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import MostVotes from "../MostVotes/MostVotes";
import Testimonials from "../Testimonials/Testimonials";
import FAQCard from "../FAQ/FAQCard";

const Home = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch('https://survey-master-server-gold.vercel.app/faq')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching survey data:", error));
    }, []);

    return (
        <div className="pt-16">
            <Banner></Banner>
            <MostVotes></MostVotes>
            <h2 className="text-xl lg:text-3xl font-bold uppercase text-center mt-24 mb-10 border-b-4 pb-1 border-yellow-300 w-fit mx-auto">Frequently Asked Questions</h2>
            <div className="px-5 max-w-5xl mx-auto">
                {
                    data.map((data) => (
                        <FAQCard
                            key={data._id}
                            data={data}
                        ></FAQCard>
                    ))
                }
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;