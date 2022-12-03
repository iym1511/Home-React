import React, { Component } from "react";
import Slider from "react-slick";
import MainCardComp from "./MainCardComp";
import MainCardComp2 from "./MainCardComp2";
import MainCardComp3 from "./MainCardComp3";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'


const MainSlide = () => {
    const settings = {
        arrows: false, // 화살표 없애줌
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (  
        <div>
        <Slider {...settings1}>
            <div>
                <MainCardComp />
            </div>
            <div>
                <MainCardComp2 />
            </div>
            <div>
                <MainCardComp3 />
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </Slider>
        </div>
    );
}

export default MainSlide;

