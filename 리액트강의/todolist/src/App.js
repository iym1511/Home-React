import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';

export default class App extends Component{

  state ={
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed: true,
      },
      {
        id:"2",
        title: "청소하기",
        completed: false,
      },
    ],
    value:"" // input 입력한것이 들어있음
  }

  btnStyle = {
    color: "#fff",
    border:"none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // 함수형 스타일 생성
  getStyle = () => {
    return{
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration:"none"
    }
  }

  

  // 할일 filter로 지우기
  // button onClick에서 클릭될때 받은 id와 현재 배열에있는 id 를 비교
  handleClick = (id) => {                                  //배열에 있는 id
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({todoData: newTodoData});
  }

  // input값 받아오고작성
  handleChange = (e) => {
    this.setState({value : e.target.value})
  }

  // 할일 추가
  handleSubmit = (e) => {
    // Submit 새로고침 막아줌 (섭밋사용시 필수)
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id : Date.now(), // 아이디는 유니크값이여야해서 현재의 데이터 나열해줌
      title: this.state.value, // 작성값
      completed: false, // 할일완료 안되있어야하니 false를 기본으로 줌
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기   
                                // 원래있던값       // 작성한거추가
    this.setState({todoData: [...this.state.todoData, newTodo]});
  }

  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할일 목록</h1>
          </div>
          {/* 할일 목록 나열 / data안에 todoData 배열들 들어감*/}
          {this.state.todoData.map((data)=>(
          <div style={this.getStyle()} key={data.id}>
            <input type="checkbox" defaultChecked={false}/>
            {data.title}
            <button style={this.btnStyle} onClick={()=>{ this.handleClick(data.id)}}>X</button>
          </div>
          ))}
          {/* 할일 작성 */}
          <form style={{display:"flex"}} onSubmit={this.handleSubmit}>
            <input type="text" 
            name="value" 
            style={{flex : "10", padding: "5px"}} 
            placeholder="해야 할 일을 입력하세요" 
            value={this.state.value}
            onChange={this.handleChange}/>

            <input type="submit"
            value="입력"
            className='btn'
            style={{flex : "1"}}
            />
          </form>
        </div>
      </div>
    )
  }
}

