import img1 from '../../../assets/01.jpg';

const Banner = () => {
    return (
        <div className="hero h-[70vh] " style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <br /><span className='uppercase text-yellow-400'>Survey Master</span> </h1>
                    <button className="btn btn-outline text-white px-5 hover:bg-yellow-400 hover:border-0 hover:text-black font-bold uppercase">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;