import { useEffect, useRef } from "react";
import "../css/SlickScroll.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Home";
import { Link, Route } from "react-router-dom";
import useScrollFadeIn from "./useScrollFadeIn";
import WebFooter from "./MainFooter";
const DIVIDER_HEIGHT = 5;

const SlickScroll = () => {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = e => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, pageHeight");

          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
        } else {
          console.log("현재 5페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          // 현재 3페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 5페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <div>
        <Home />
      </div>
      <div
        className="inner bg-blue"
        // {...useScrollFadeIn("up", 1, 0)} <- 스크롤 이벤트 사용법
      >
        <ul>
          <li {...useScrollFadeIn("up", 1, 0)}>
            <Link to="/page2">
              <img src="./simmons1.jpg" alt="" />
            </Link>
          </li>

          <li {...useScrollFadeIn("up", 1, 0)}>
            <Link to="/page2">
              <img src="./simmons2.jpg" alt="" />
            </Link>
          </li>
          <li {...useScrollFadeIn("up", 1, 0)}>
            <Link to="/page2">
              <img src="./simmons3.jpg" alt="" />
            </Link>
          </li>
          <li {...useScrollFadeIn("up", 1, 0)}>
            <Link to="/page2">
              <img src="./simmons4.jpg" alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="inner bg-pink">
        <div className="span" {...useScrollFadeIn("up", 1, 0)}>
          <h1>맥시멈 세이프티 패딩</h1>
          <span> 난연사를 사용해 화재에 대한 탁월한 안전성을 가진 신소재</span>
        </div>
        <video loop autoPlay muted playsInline {...useScrollFadeIn("up", 1, 0)}>
          <source src="./ì¹¨ë__ - 85002.mp4" type="video/mp4" />
        </video>
        <div className="span2" {...useScrollFadeIn("up", 1, 0)}>
          <h1>퓨어 린넨 자가드원단</h1>
          <span>
            최고급 자연 소재인 100% 린넨 원단으로 피부 자극을 최소화하고
            <br />
            탁월한 흡수성과 통기성 제공
          </span>
        </div>
      </div>
      <div className="inner bg-black"></div>
      <div className="inner bg-dark">
        <li {...useScrollFadeIn("up", 1, 0)}>
          <Link to="/LandingPage">
            <img src="./store-map.jpg" alt="" />
          </Link>
        </li>
      </div>
      <div className="Footer">
        <WebFooter />
      </div>
    </div>
  );
};

export default SlickScroll;
