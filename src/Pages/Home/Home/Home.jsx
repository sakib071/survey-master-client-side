import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="pt-16">
            <Banner></Banner>
            <h2 className="text-3xl">Most Voted Section</h2>
            <h2 className="text-3xl">Add  some  meaningful  FAQ</h2>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;