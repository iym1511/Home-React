import {Container, Col, Row} from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft, faBackspace} from '@fortawesome/free-solid-svg-icons'
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import React, { Component } from "react";
import MainCardComp from "../components/MainCardComp"
import MainCardComp2 from "../components/MainCardComp2"
import MainCardComp3 from "../components/MainCardComp3"
import Parallax from "../components/Parallax";





const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settings1 = {
        arrows: false, // 화살표 없애줌
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    // 받아서 씀
    const {state} = useContext(DataContext)

    return (  
        <div>
            <div>
                
            </div>
            <Slider {...settings1}  style={{marginTop:"-16px"}}>
            <div>
            <div className="top-grd"></div>
                <MainCardComp />
            </div>
            <div>
            <div className="top-grd"></div>
                <MainCardComp2 />
            </div>
            <div>
            <div className="top-grd"></div>
                <MainCardComp3 />
            </div>
        </Slider>
        <div className="Main-Card">
        <h2 className="Main-Card-title">Our Models</h2>
        <p className="Main-Card-Subtitle">역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요.</p>
        </div>
            <Container>
                <Row >
                    <Col className="px-5">
                        <Slider {...settings}>
                            {state.productList.map((product)=>(
                                <div>
                                    <ProductCard key ={product.productId} product={product} />
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
            <Parallax />
            <div className="he"></div>
        </div>
    );
}

export default Home;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronRight} 
        className={className} 
        onClick={onClick}
        style={{color:"white"}}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronLeft} 
        className={className} 
        onClick={onClick}
        style={{color:"white"}}
        />
    );
  }