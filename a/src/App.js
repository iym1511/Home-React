import logo from './logo.svg';
import './App.css';
import Tamplate from './components/Tamplate';
import TodoList from './components/TodoList';
import { useState } from 'react';

import {MdAddCircle} from 'react-icons/md'
import TodoInsert from './components/TodoInsert';

// 함수안에 있으면 계속 리랜더링되서 4로 남기떄문에
// 계속 증가를위에 함수 밖에 선언
let nextId = 4;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  // 객체 배열 설정
  const [todos, setTodos] = useState([
  {
    id: 1,
    text: "할일 1",
    checked: true
  },
  {
    id: 2,
    text: "할일 2",
    checked: false
  },
  {
    id: 3,
    text: "할일 3",
    checked: true
  }
  ]);

  const onInsertToggle = () => {
    {/* 클릭되면 insertToggle을 true 로 바꿔주는 함수 */}
    setInsertToggle(prev=> !prev)
  }

  const onInsertTodo = (text) =>{
    if(text === "") {
      return alert('할 일을 입력해주세요')
    }else{
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos((todos)=> todos.concat(todo));
      nextId++;
    }
  }

  const onCheckToggle = (id) => {     // todo.id와 id가 일치한다면 todo가 가지고있는 객체속성을 모두가져오고 checked의 값을 가져옴 / 같지않으면 todo 반환
    setTodos((todos)=> todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }

  const onRemove = (id) => {
    onInsertToggle();   // todo의 id가 인자로받아온 id가 일치하지않는것만 리턴
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      {/* todos 배열의 개수를 반환 */}
      <Tamplate todoLength={todos.length}> 
      {/* todos배열 안의 내용을반환 */}
        <TodoList todos={todos} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>
        <div className='add-todo-button' onClick={onInsertToggle}>  {/* 클릭시 참으로 변환 */}
          <MdAddCircle/>
        </div>                {/* insertToggle이 참일때  / 바깥을 클릭했을때 Insert화면 사라지게 해주려도 값을 넘김  / 일정추가 값 넘겨줌*/}
        {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} selectedTodo={selectedTodo} onRemove={onRemove}/>}  
      </Tamplate>
    </div>
  );
}

export default App;
