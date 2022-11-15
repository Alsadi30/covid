// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductTitle } from "./singleProductElements";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const slideLength = [1, 2];
function RelatedProduct() {
  return (
    <>
      <ProductTitle>Related Product</ProductTitle>
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
}

export default RelatedProduct;
