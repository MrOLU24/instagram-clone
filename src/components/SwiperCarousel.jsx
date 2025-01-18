import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperCarousel() {
  return (
    <Swiper loop autoplay={{ delay: 2000 }}>
      <SwiperSlide>
        <img
          src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1.png?__d=www"
          alt="Slide 1"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot4.png?__d=www"
          alt="Slide 2"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png?__d=www"
          alt="Slide 3"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png?__d=www"
          alt="Slide 4"
          className="w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}
