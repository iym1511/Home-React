import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {createStore} from 'redux';
            // 어떤state쓸지 선택 / state변경 / 
import {Provider , useSelector, useDispatch, connect} from 'react-redux';

            // 현재state값 / 어떻게바꿀건지요청
function reducer(currentState, action){
  if(currentState === undefined){
  return {
    number:1,
  };
}

// 새로운 state를 만드는데 과거의 state 유지 (state복제)
const newState = {...currentState}

// 리듀서 호출
if(action.type === "PLUS"){
  newState.number++;
}

if(action.type === "MINUS"){
  newState.number--;
}

return newState; //,(복제시킨state 리턴)
}

const store = createStore(reducer);

function App() {

  return (
    <div className="App">
      <div id='container'>
        <h1>Root</h1>
          <div id='grid'>
            <Provider store={store}>
            <Left1></Left1> {/* 여기서 number 1 state값을줌 */}
            <Right1></Right1>
            </Provider>
          </div>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>   {/* 여기서 number 1 state값받음 */}
      <h1>Left1</h1>
      <Left2></Left2> 
    </div>
  );
}

function Left2(props2) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  // 여기서 state 가져올수있음 --------------------------
  function f(state){
    return state.number;
  }
  const number = useSelector(state=>state.number); //f 만 입력해도됨

  // ----------------------------------------------------

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}



function Right1(props) {
  return (
    <div>
      <h1>Right1 </h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2 </h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {

  // 가져와서 변경을줄때 setState 가져옴
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3 : {props.number}</h1>             
      <input type="button" value="+" onClick={()=>{dispatch({type:"PLUS"})}}></input>
      <input type="button" value="-" onClick={()=>{dispatch({type:"MINUS"})}}></input>
    </div>
  );
}
// 최상위에있는 number라는 state를 말단에있는 Left3에게 전달


export default App;
