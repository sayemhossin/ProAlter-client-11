// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'



const Slider = () => {
    return (
        <div>
      <Swiper
     
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
         <img className='w-full' src="https://i.ibb.co/zZv3MXz/holiday-villa-beach-resort.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src="https://i.ibb.co/zZv3MXz/holiday-villa-beach-resort.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src="https://i.ibb.co/zZv3MXz/holiday-villa-beach-resort.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;