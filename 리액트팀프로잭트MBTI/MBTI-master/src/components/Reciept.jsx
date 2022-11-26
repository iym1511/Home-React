import { useContext } from "react";
import DataContext from "../data/DataContext";

const Reciept = () => {

    const {state} = useContext(DataContext);

    return ( 
        <div className="b" style={{width:"100px", height:"500px", backgroundColor:"pink"}}>
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
                  <p style={{margin: "0"}}>{r.title}</p>
                </div>
              ))
            }
        </div>
    );
}

export default Reciept;