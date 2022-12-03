import { useEffect, useState } from "react";
import Nav from "./Nav";
import Slick from "./Slick";
import "../css/SlickScroll.css";

function Home() {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  function handleScroll() {
    if (ScrollY > 100) {
      setScrollY(window.pageYOffset);
    } else {
      setScrollY(window.pageYOffset);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
  return (
    <div>
      <div className="fix-box">
        <div>
          <Nav />
          <div>
            <h1
              style={{
                textAlign: "center",
                marginTop: 0,
              }}
            >
              SIMMONS
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <Slick />
    </div>
  );
}
export default Home;
