import React, { useState } from "react";
import MapContainer from "./Mapcontainer";
import "../css/LandingPage.css";
function LandingPage() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <MapContainer searchPlace={Place} />
      <form className="inputForm" onSubmit={handleSubmit} style={{position:"relative", bottom:"250px", width:"100%"}}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
          style={{border:"none",borderBottom:"1px solid green",marginLeft:"5px", width:"370px", height:"40px",fontSize:"20px"}}
        />
        <button type="submit" className="searchBtn" style={{width:"80px",height:"45px", marginLeft:"5px", border:"none"}}>검색</button>
      </form>
    </>
  );
}

export default LandingPage;
