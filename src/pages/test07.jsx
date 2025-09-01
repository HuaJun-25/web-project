import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/test07.css';

const App = () => {
  return (
    <>
      <div className="swiinner">
        <div className="swicard">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            rewind={true}
            mousewheel={true}
            centeredSlides={true}
            pagination={{ clickable: true, }}
            navigation={{ clickable: true, }}
            modules={[Navigation, Mousewheel]}
            // coverflowEffect={{
            //   rotate: 0,
            //   stretch: 0,
            //   depth: 200,
            //   modifier: 2,
            //   slideShadows: false,
            // }}
            effect="coverflow"
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>
        </div>
      </div>

    </>
  )
}

export default App
