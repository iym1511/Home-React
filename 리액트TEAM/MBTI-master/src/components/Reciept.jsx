import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataContext from "../data/DataContext";
import './Reciept.css';

const Reciept = () => {
    const {state} = useContext(DataContext);
 

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