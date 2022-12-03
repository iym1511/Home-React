import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataContext from "../data/DataContext";
import './Reciept.css';

const Reciept = () => {
    const {state} = useContext(DataContext);
 

    return ( 
      <div>        
        <div className="receipt">
          <div className="State-bar">
            선택 항목
          </div>
          
            {
              state.reciept.map((r,i)=>(
                <div key={i}>
                  <p className="checklist">{r.name}{r.answer}</p>
                </div>
              ))
            }
        </div>
      </div>

    );
}

export default Reciept;