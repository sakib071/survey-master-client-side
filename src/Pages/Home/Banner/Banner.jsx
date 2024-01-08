import img1 from '../../../assets/01.jpg';

const Banner = () => {
    return (
        <div className="hero h-[70vh]" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to <br /><span className='uppercase text-yellow-300'>Survey Master</span> </h1>
                    <p className='text-lg mb-6 text-white'>If you&apos;re struggling to get your survey off the ground, then use our free survey form.</p>
                    <button className="btn btn-outline text-white px-5 hover:bg-yellow-400 hover:border-0 hover:text-black font-bold uppercase">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;