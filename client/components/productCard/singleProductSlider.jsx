// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const slideLength = [1, 2];

export const ProductSlide = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slideLength?.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
