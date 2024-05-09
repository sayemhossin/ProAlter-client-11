// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import image1 from '../assets/image/no3.jpg'
import image2 from '../assets/image/no2.webp'
import image3 from '../assets/image/no1.jpg'
import Slide from './Slide'

const Slider = () => {
    return (
        <div>
      <Swiper
     
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
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
        <Slide
            image={image1}
            text='Encapsulates the essence of the website. It signifies a platform where users come together to share insights, recommendations, and queries about alternative products. This community-driven approach fosters collaboration, empowers users to make informed decisions, and promotes a culture of knowledge sharing and support'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            image={image2}
            text='Encapsulates the essence of the website. It signifies a platform where users come together to share insights, recommendations, and queries about alternative products. This community-driven approach fosters collaboration, empowers users to make informed decisions, and promotes a culture of knowledge sharing and support'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            image={image3}
            text='Encapsulates the essence of the website. It signifies a platform where users come together to share insights, recommendations, and queries about alternative products. This community-driven approach fosters collaboration, empowers users to make informed decisions, and promotes a culture of knowledge sharing and support'
          />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;