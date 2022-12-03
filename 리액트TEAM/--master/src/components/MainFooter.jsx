const WebFooter = () => {
  return (
    <div className="main">
      <div className="top">
        <a href="https://www.simmons.co.kr/img/layout/footer_logo.png"></a>
        <ul>
          <li>
            <a href="">이용약관</a>
          </li>
          <li>
            <a href="">개인정보처리방침</a>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <address>
          (주)시몬스
          <span> │ </span>주소: 경기도 이천시 모가면 사실로 1000<span> │ </span>
          대표: 안정호<span> │ </span>고객센터:1899-8182
          <br />
          사업자등록번호: 126-81-24808<span> │ </span>
          <a href="">사업자정보 확인</a>
          <span> │ </span>통신판매업신고: 제2014-경기이천-0135호
          <br />
          개인정보 관리책임자: 김영훈 <span> │ </span> 호스팅 서비스 <br />
          사업자: ㈜가비아
        </address>
      </div>
      <div>
        <span>
          Contact to :{" "}
          <a href="mailto:master@simmons.co.kr">master @ simmons.co.kr</a>
        </span>
      </div>
    </div>
  );
};

export default WebFooter;
