import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
    Navigation, 
    Pagination, 
    Scrollbar, 
    A11y 
} from "swiper";

//style
import "swiper/swiper.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import 'resources/css/portfolio.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function Portfolio2() {
  return (
    <div className="pages" style={{'background':'#ccc','padding-top':'95px'}}>
        <Swiper
        className='swiper-container'
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        >
        <SwiperSlide> slide1 </SwiperSlide>
        <SwiperSlide> slide2 </SwiperSlide>
        <SwiperSlide> slide3 </SwiperSlide>
        <SwiperSlide> slide4 </SwiperSlide>
        <SwiperSlide> slide5 </SwiperSlide>
        </Swiper>
    </div>
  );
}

export default Portfolio2;