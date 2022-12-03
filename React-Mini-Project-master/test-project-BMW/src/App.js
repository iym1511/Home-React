import logo from './logo.svg';
import './App.css';

import {Button, Container}  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComp from './components/NavComp';
import NavbarComp from './components/NavbarComp';
import CardComp from './SubCard/CardComp';
// 그리드 컴포넌트
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// slick(카드 슬라이드) 컴포넌트
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 아이콘 불러오기
import { faEnvelope, faAppleWhole, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CardComp2 from './SubCard/CardComp2';
import CardComp3 from './SubCard/CardComp3';
import MainCardComp from './MainCard/MainCardComp';
import MainSlide from './MainCard/MainSlide';



function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
    
  return (
    <div className="App">
      <NavbarComp />

      <MainSlide />
      <br></br><br></br>

      <Button variant="primary" onClick={()=>{alert("클릭")}}>
      <FontAwesomeIcon icon={faEnvelope} />
      </Button>{' '}
      <Container>
        {/* 그리드 */}
      <Row className="justify-content-md-center">
        <Col xs lg="2">1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">3 of 3</Col>
         {/* 슬라이드 */}
    <br></br>
      <Slider {...settings}>
          <div>
            <CardComp/>  {/** 카드를 넣어 슬라이드 사용 */}
          </div>
          <div>
            <CardComp2 />
          </div>
          <div>
            <CardComp3 />
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </Slider>
        <div/>
      </Row>
      </Container>
   
    </div>
  );
}
export default App;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <FontAwesomeIcon icon={faChevronRight} 
      className={className} 
      onClick={onClick}
      style={{color:"#000000"}}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <FontAwesomeIcon icon={faChevronLeft} 
      className={className} 
      onClick={onClick}
      style={{color:"#000000"}}
      />
  );
}