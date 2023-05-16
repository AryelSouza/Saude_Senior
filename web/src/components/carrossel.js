import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Index.module.css"

const settings = {
  dots: true,
};

function Carrossel({children, style}) {
  return (
    <div style={`${style}`}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default Carrossel;
