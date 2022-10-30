import { Flex, FlexCenterD } from "./styles/Flex.styled";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Content } from "./styles/Content.styled";
import Button from "./UI/Button";
import { FiArrowRight } from 'react-icons/fi';

const slideLength = [1, 2];

const Slide = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    slideLength?.map((slide, i) => <SwiperSlide key={i}>
                        <Content imagePath='./slides/slide3.png' bg="#F0F2F3">
                            {/* <FlexCenterD> */}
                                <h1>Best medicine for your covid problem.</h1>
                                <Button bg="#029FAE" maxW="30%">Shop Now <FiArrowRight></FiArrowRight></Button>
                            {/* </FlexCenterD> */}
                        </Content>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Slide;