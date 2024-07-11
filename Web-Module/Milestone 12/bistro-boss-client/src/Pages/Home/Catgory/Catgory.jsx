import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SharedTitle from '../../../components/sharedtitle/SharedTitle';


const Catgory = () => {
    return (
        <section>
            <SharedTitle
            subHeading={'From 11:00AM To 10:00PM'}
             heading={'Order Online'}>
             </SharedTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Catgory;