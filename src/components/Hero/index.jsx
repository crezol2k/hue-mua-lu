import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-control d-flex justify-content-center flex-column align-items-center">
        <div className="heading-main mb-2">
          <h1 className="text-center">
            <ScrollAnimation
              animateIn="animate__fadeInDownBig"
              duration={1}
            >
              Huế mùa lũ: Đường biến thành sông, đô thị “vàng” loay hoay giữa
              vòng xoáy ngập lụt
            </ScrollAnimation>
          </h1>
        </div>
        <div className="heading-sub mt-4">
          <p className="text-center">
            <ScrollAnimation
              animateIn="animate__bounceInLeft"
              duration={2}
            >
              Những ngày qua trên địa bản tỉnh TT- Huế có mưa lớn kéo dài, các
              thủy điện tăng cường điều tiết xã lũ trước khi bão số 5 vào đất
              liền khiến nhiều nơi ngập lụt. Theo nhiều người dân, trận lũ lịch
              sử lần này tại cố đô Huế chỉ xếp sau trận "đại hồng thủy" năm
              1999, tất cả các tuyến đường trung tâm TP. Huế biến thành sông
            </ScrollAnimation>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
