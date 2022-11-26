import React from 'react';
// css-in-js
import PangImage from '../img/Logo.png'
import './Home.css'
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const StartClickButton = () =>{
        // useHistory 여기서 이동됨
        navigate('/question');

    }

    return (  
        <div className="Wrapper">
            <div className='Contents'>
            <div className='Header'>간편 견적</div>
                <div className='Title'>나에게 맞는 업체</div>
                <div className='LogoImage'>
                    <img src={PangImage} width={200} ></img>
                </div>
            <div className='Desc'>mbti를 기본으로하는 간편 견적</div>
            <button className='StartBtn' onClick={StartClickButton}>견적 짜러가기</button>
            </div>
        </div>
  
    );
}
 
export default Home;




