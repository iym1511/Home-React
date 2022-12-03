import React from 'react';
import Home from '../pages/Home';
import Question from '../pages/Question';
import Result from '../pages/Result';
import {Routes, Route} from 'react-router-dom';
import Reciept from './Reciept';


const View = () => {
    return (  
        <div className='a'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='question' element={<Question />}></Route>
                <Route path='result' element={<Result />}></Route>
                <Route path='reciept' element={<Reciept />}> </Route>
            </Routes>
        </div>
    );
}
 
export default View;