import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="my-20">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(review => <SwiperSlide
                        key={review._id}>
                        <div className="text-center lg:w-1/2 mx-auto p-5 space-y-3">
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 120 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-xl lg:text-3xl text-black"> {review.name}</h3>
                            <h3 className="lg:text-md text-yellow-500 badge badge-outline mx-auto lg:py-4 lg:px-2"> {review.role}</h3>
                            <p className="text-sm text-black"> {review.testimonial}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;