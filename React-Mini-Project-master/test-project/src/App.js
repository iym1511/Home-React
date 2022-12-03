import logo from './logo.svg';
import './App.css';

import {Button, Container}  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComp from './components/NavComp';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
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
import { faEnvelope,faBagShopping, faAppleWhole } from '@fortawesome/free-solid-svg-icons'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <FontAwesomeIcon 
      icon={faAppleWhole} 
      onClick={onClick}
      className={className}
      style={{color:"red"}}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


function App() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    
  return (
    <div className="App">
      <NavbarComp />
      <CardComp />
      <Button variant="primary" onClick={()=>{alert("클릭")}}>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faBagShopping} />
      <FontAwesomeIcon icon={faAppleWhole} />
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
            <h3>1</h3>
            <CardComp />  {/** 카드를 넣어 슬라이드 사용 */}
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div/>
      </Row>
      </Container>
   
    </div>
  );
}
export default App;
