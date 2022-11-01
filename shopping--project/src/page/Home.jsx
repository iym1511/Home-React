import {Container, Col, Row} from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'

import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import React, { Component } from "react";
import MainCardComp from "../components/MainCardComp"
import MainCardComp2 from "../components/MainCardComp2"
import MainCardComp3 from "../components/MainCardComp3"
import Parallax from "../components/Parallax";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";






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

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

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
        <p className="Main-Card-Subtitle">역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 BMW 브랜드의 라인업을 살펴보세요.</p>
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
            
            <h1 className="fade-title">BMW XM 주행 성능.</h1>
            <div className="grids">
                <div data-aos="fade-up" className="fade-image">
                <div className="fade-img1">
                <img src={require('../img/fadeimg.jpg')} alt="" />
                </div>

                <div className="fade-text">
                    <p data-aos="fade-left">BMW XM 하이라이트.</p>
                </div>
                <div className="fade-text2">
                    <p data-aos="fade-left">BMW M1 이후 선보이는 M 전용 모델</p>
                </div>
                

                </div>

                <div data-aos="fade-right" className="boxes1">
                <img  className="fade-img2" src={require('../img/fadeimg2.jpg')} alt="" />
                <h2 data-aos="fade-right" className="fade-img2-tag">M 하이브리드 드라이브 시스템.</h2>
                <p data-aos="fade-right" className="fade-img2-tag2">전기 모터와 강력한 V8 엔진 간 상호 작용으로 버튼 터치로<br></br><br></br>
                순수 전기 구동과 하이브리드 모드를 전환할 수 있습니다.<br></br><br></br>
                동시에 지능형 주행 모드로 운전 환경을 최적화합니다.</p>
                </div>

                <div data-aos="fade-right" className="boxes2" >
                <img className="fade-img3" src={require('../img/fadeimg3.jpg')} alt="" />
                <h2 data-aos="fade-right" className="fade-img3-tag"> 80KM* 순수 전기 주행. </h2>
                <p data-aos="fade-right" className="fade-img3-tag2">650마력*의 효율적인 BMW eDrive 시스템은 80KM* 순수 전기<br></br><br></br>
                주행이 가능하여 조용하면서 환경친화적인 주행 경험을 선사합니다.</p>
                </div>

                <div data-aos="fade-right" className="boxes3">
                <img className="fade-img4" src={require('../img/fadeimg4.jpg')} alt="" />
                <h2 data-aos="fade-right" className="fade-img4-tag">BMW 커브드 디스플레이.</h2>
                <p data-aos="fade-right" className="fade-img4-tag2">12.3인치 디스플레이와 터치식 14.9인치 디스플레이가 결합된<br></br><br></br>
                BMW 커브드 디스플레이는 차량에 대한 정보를 더욱 분명하고 선명하게 보여줍니다. </p>
                </div>
            </div>
            <footer className="footer">
                <img src="https://www.bmw.co.kr/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg" alt="" />
                <p>© Copyright 2022 BMW Motor Company.</p>
                <p>All Rights Reserved.</p>
                <a href="https://ko-kr.facebook.com/BMWKorea/"><FontAwesomeIcon icon={faFacebook} className="footer-img"/></a>
                <a href="https://www.instagram.com/bmw_korea/"><FontAwesomeIcon icon={faInstagram} className="footer-img"/></a>
                <a href="https://www.youtube.com/c/bmwkorea"><FontAwesomeIcon icon={faYoutube} className="footer-img"/></a>
            </footer>
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