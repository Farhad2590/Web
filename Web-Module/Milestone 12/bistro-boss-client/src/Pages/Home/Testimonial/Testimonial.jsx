import SharedTitle from "../../../components/sharedtitle/SharedTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className="my-20">
            <SharedTitle
                subHeading={'What our client say'}
                heading={'Testimonials'}
            >
            </SharedTitle>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map(reviews => <SwiperSlide key={reviews._id}>
                            <div className="flex flex-col items-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={reviews.rating}
                                    readOnly
                                />
                                <p className="py-8">{reviews.details}</p>
                                <p className="text-2xl text-orange-400">{reviews.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>

        </section>
    );
};

export default Testimonial;