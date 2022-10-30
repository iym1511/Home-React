import { useEffect, useState } from "react";

export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }

  // 스크롤 할때마다 변함
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // 빈배열 : 최초 마운트때 한번만 실행



  return (
    <div className="wrapper">

      <div
        className="bg bg2"
        style={{
          backgroundPositionY: position / -6
        }}
      >
        <div className="bg2-p">BMW 뉴 3시리즈 제원정보.</div>
      </div>

      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        
      </p>
      
      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        —————————————————————————————————————————————————————————————————————————————————————————————————————————————————
      </p>
      <p
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        —————————————————————————————————————————————————————————————————————————————————————————————————————————————————
      </p>
      <div className="desc-all">
        <div className="desc3-1" style={{
          opacity: (position - 1650) / 450,
        }}>
         >
        </div>
  
      <p
        className="desc3"
        style={{
          opacity: (position - 1850) / 450,
        }}
      >
        Duis aute irure dolor
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2050) / 450,
        }}
      >
        Lorem ipsum dolor sit amet
        
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2150) / 450,
        }}
      >
        Excepteur sint occaecat
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2250) / 450,
        }}
      >
        sunt in culpa qui officia deserunt
      </p>  
      </div>
      <div className="scroll-down"></div>
    </div>
  );
}
