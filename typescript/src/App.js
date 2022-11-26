import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Collection/>
        <div id="pentitle" style="display: none;" data-title="Expanding Horizontal Accordion in React"></div>
<div id="root"></div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"))
