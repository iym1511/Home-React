import logo from './logo.svg';
import './App.css';
import StateBox from './components/StateBox';
import PropsParent from './components/PropsParent';
import TestState from './components/TestState';
import EventBox from './components/EventBox';
import TestEvent from './components/TestEvent';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <StateBox />
      <TestState />
      <EventBox />
      <hr />
      <TestEvent/>
      <hr />
      <Rating />
    </div>
  );
}

// export를 통해서 모듈 형식으로 함수나 변수를 내보내줄수 있다.
// default가 붙게되면 {}없이 들고올 수 있다.
// export로만 내보내주면 {}
//
export default App;
