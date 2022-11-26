import React, { useContext, useEffect, useState } from 'react';
// css-in-js
import './Result.css'
import {useNavigate, useSearchParams} from 'react-router-dom';
import DataContext from '../data/DataContext';



const Result = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');

    // 최종적으로 도출한 결과 객체
    const [resultData, setResultData] = useState({});
    useEffect(()=>{
        const result = data.state.result.find((s) => s.best === mbti);
        setResultData(result);
        
    },[mbti])
    
    

    return (  
            <div className="Wrapper">
                <div className='Header'>간편 견적 </div>
            <div className='Contents'>
                <div className='Title'>결과 보기</div>
                <div className='LogoImage'>
                    
                </div>
            
            <button className='ReStartBtn' onClick={()=>navigate('/')}>견적 다시짜기</button>
            </div>
        </div>
    );
}
 
export default Result;