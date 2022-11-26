import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DataContext from "../data/DataContext";
import './Reciept.css';

const Reciept = () => {

    const {state} = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');

    // 최종적으로 도출한 결과 객체
    const [resultData, setResultData] = useState({});
    useEffect(()=>{
        const result = state.score.find((s) => s.best === mbti);
        setResultData(result);
        
    },[mbti])  

    return ( 
      <div>        
        <div className="receipt">
            {
              state.reciept.map((r,i)=>(
                <div key={i}>
                  <p>{r.name}{r.answer}</p>
                </div>
              ))
            }
            {
              state.result.map((r,i)=>(
                <div className="result-map" key={i}>
                  <p style={{margin: "0"}}></p>
                </div>
              ))
            }
        </div>
      </div>

    );
}

export default Reciept;